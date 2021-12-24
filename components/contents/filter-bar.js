/* eslint-disable @next/next/no-img-element */
// react api
import { useRef, useEffect, useState } from "react";
// redux api and actions
import { useDispatch } from "react-redux";
import { sortBy } from "../../redux/pageSlice";

export default function FilterBar ({allFilters, allProducts, countPr = '0', page}) {
  // redux dispatch
  const dispatch = useDispatch();
  // dropdown refs
  const childrenRef = useRef([]);
  // storage dropdowns
  const dropdowns = [];
  // total product counter
  const textCountPr = countPr < 2 ? ' item' : ' items';
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
  // handle close dropdown when click
  const closeDropdown = () => {
    if (childrenRef.current) {
      childrenRef.current.forEach((element) => {
        if (element.className === 'filter-bar__children filter-bar__children--show') {
          element.className = 'filter-bar__children filter-bar__children--hidden'
        }
      })
    }
  }
  // handle sort functions
  const handlePriceLowToHigh = () => {
    dispatch(
      sortBy({
        sortBy: 'priceLowToHigh',
        pageName: page,
        pageData: allProducts
      })
    );
    closeDropdown()
  }
  const handlePriceHighToLow = () => {
    dispatch(
      sortBy({
        sortBy: 'priceHighToLow',
        pageName: page,
        pageData: allProducts
      })
    );
    closeDropdown()
  }
  const sortByNewestProducts = () => {
    dispatch(
      sortBy({
        sortBy: 'newest',
        pageName: page,
        pageData: allProducts
      })
    );
    closeDropdown()
  }
  const sortByOldestProducts = () => {
    dispatch(
      sortBy({
        sortBy: 'oldest',
        pageName: page,
        pageData: allProducts
      })
    );
    closeDropdown()
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
        handlePriceLowToHigh={handlePriceLowToHigh}
        handlePriceHighToLow={handlePriceHighToLow}
        sortByNewestProducts={sortByNewestProducts}
        sortByOldestProducts={sortByOldestProducts}
      />
    );
  });

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

function Dropdown ({
  filterName, filterChildren, childrenRef, handleOpenChildren,
  handlePriceLowToHigh, handlePriceHighToLow, sortByNewestProducts,
  sortByOldestProducts
}) {
  // active class name
  const [activeClass, setActiveClass] = useState('filter-bar__children--active')
  // storage the children tabs
  const childrenTabs = []
  // fetch children tabs
  filterChildren.forEach((name, index) => {
    if (name === 'Newest') {
      childrenTabs.push(
        <span 
          onClick={sortByNewestProducts} key={index} 
          className={activeClass}
        >{name}</span>
      )
    } else {
      if (name === 'Low to high') {
        childrenTabs.push(
          <span onClick={handlePriceLowToHigh} key={index}>{name}</span>
        )
      } else if (name === 'High to low') {
        childrenTabs.push(
          <span onClick={handlePriceHighToLow} key={index}>{name}</span>
        )
      } else if (name === 'Oldest') {
        childrenTabs.push(
          <span onClick={sortByOldestProducts} key={index}>{name}</span>
        )
      } else {
        childrenTabs.push(
          <span key={index}>{name}</span>
        )
      }
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