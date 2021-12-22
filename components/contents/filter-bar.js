/* eslint-disable @next/next/no-img-element */
// react api
import { useRef, useEffect } from "react";

export default function FilterBar ({allFilters, countPr = '0'}) {
  // dropdown refs
  const childrenRef = useRef([]);
  // storage dropdowns
  const dropdowns = [];
  // handle multiple refs
  useEffect(() => {
    childrenRef.current = childrenRef.current.slice(0, allFilters.length);
 }, [allFilters]);
  // handle open dropdown children tab
  const handleOpenChildren = (currentIndex) => {
    let showClass = 'filter-bar__children filter-bar__children--show'
    let hiddenClass = 'filter-bar__children filter-bar__children--hidden'
    if (childrenRef.current) {
      childrenRef.current.forEach((element, index) => {
        // open or close current children tab
        if (index === currentIndex) {
          if (element.className !== showClass) {
            element.className = showClass;
          } else {
            element.className = hiddenClass;
          }
        } else {
          // hide other children tabs
          element.className = 'filter-bar__children filter-bar__children--hidden'
        }
      })
    }
  }
  // fetch allFilters api
  allFilters && allFilters.forEach((item, index) => {
    dropdowns.push(
      <Dropdown
        key={index}
        filterName={item.name}
        filterChildren={item.children}
        childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
        handleOpenChildren={() => handleOpenChildren(index)}
      />
    );
  });
  // total product counter
  const textCountPr = countPr < 2 ? ' item' : ' items';

  return (
    <div className="filter-bar">
      <div className="filter-bar__group">{dropdowns}</div>
      <div className="filter-bar__total">{countPr + textCountPr}</div>
      <div className="filter-bar__button">
        <img src="/svgs/filter-btn.svg" alt="fitler button" />
      </div>

      <div className="filter-bar__close-button">
        <img src="/svgs/close.svg" alt="fitler button" />
      </div>
    </div>
  )
}

function Dropdown ({filterName, filterChildren, childrenRef, handleOpenChildren}) {
  // storage the children tabs
  const childrenTabs = []
  // fetch children tabs
  filterChildren.forEach((name, index) => {
    childrenTabs.push(
      <span key={index}>{name}</span>
    )
  })

  return (
    <div className="filter-bar__dropdown">
      <div 
        onClick={handleOpenChildren}
        className="filter-bar__tab"
      >
        <span>{filterName}</span>
        <img src="/svgs/dropdown-i.svg" alt="dropdown arrow" />
      </div>

      <div 
        ref={childrenRef}
        className="filter-bar__children filter-bar__children--hidden"
      >
        {childrenTabs}
      </div>
    </div>
  )
}