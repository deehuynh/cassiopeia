/* eslint-disable @next/next/no-img-element */
// react api
import { useRef, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  console.log(state)
}

export default function FilterBar ({allFilters, allProducts, countPr = '0'}) {
  const [products, dispatch] = useReducer(reducer, allProducts)
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
  // default data
  const sortByDefault = 'Oldest'
  // active class name
  const activeClass = 'filter-bar__children--active'
  // storage the children tabs
  const childrenTabs = []
  // fetch children tabs
  filterChildren.forEach((name, index) => {
    if (name === sortByDefault) {
      childrenTabs.push(
        <span key={index} className={activeClass}>{name}</span>
      )
    } else {
      childrenTabs.push(
        <span key={index}>{name}</span>
      )
    }
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
        <div className="filter-bar__children-arrow"></div>
        <div className="filter-bar__children-list">
          <p></p>
          {childrenTabs}
          <p></p>
        </div>
      </div>
    </div>
  )
}