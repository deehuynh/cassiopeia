/* eslint-disable @next/next/no-img-element */
// filter modal on mobile
import FilterModal from "../filter-modal";
import { DropdownModal } from "../filter-modal";
// react api
import { useRef, useEffect, useState, useContext } from "react";
// redux api and actions
import { useDispatch } from "react-redux";
import { sortBy, selectPrice, selectType, selectOccasion } from "../../redux/pageSlice";
// ref context
import { refContext } from "../../contextStore";

export default function FilterBar ({allFilters, allProducts, countPr = '0', page}) {
  // filter Modal ref
  const filterModalRef = useContext(refContext);
  // active child tab
  const [activeTab, setActiveTab] = useState('Newest');
  // redux dispatch
  const dispatch = useDispatch();
  // dropdown refs
  const childrenRef = useRef([]);
  // storage dropdowns
  const dropdowns = [];
  const dropdownsModal = [];
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
  // handle sort function
  const handleSortBy = (childrenTab) => {
    dispatch(
      sortBy({
        sortBy: childrenTab,
        pageName: page,
        pageData: allProducts
      })
    );
    closeDropdown();
    setActiveTab(childrenTab);
  }
  const handlePrice = (childrenTab) => {
    dispatch(
      selectPrice({
        pageName: page,
        pageData: allProducts,
        option: childrenTab
      })
    );
    closeDropdown();
    setActiveTab(childrenTab);
  }
  const handleType = (childrenTab) => {
    dispatch(
      selectType({
        pageName: page,
        pageData: allProducts,
        option: childrenTab
      })
    );
    closeDropdown();
    setActiveTab(childrenTab);
  }
  const handleOccasion = (childrenTab) => {
    dispatch(
      selectOccasion({
        pageName: page,
        pageData: allProducts,
        occasion: childrenTab
      })
    );
    closeDropdown();
    setActiveTab(childrenTab);
  }
  // fetch allFilters api
  allFilters && allFilters.forEach((item, index) => {
    if (item.name === 'Sort by') {
      dropdowns.push(
        <Dropdown
          key={index}
          filterName={item.name}
          filterChildren={item.children}
          childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
          handleOpenChildren={() => handleOpenChildren(index)}
          handleSortBy={(activeTab) => handleSortBy(activeTab)}
          activeTab={activeTab}
        />
      );

      dropdownsModal.push(
        <DropdownModal 
          key={index}
          filterName={item.name}
          filterChildren={item.children}
          childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
          handleOpenChildren={() => handleOpenChildren(index)}
          handleSortBy={(activeTab) => handleSortBy(activeTab)}
          activeTab={activeTab}
        />
      )
    } else if (item.name === 'Price') {
        dropdowns.push(
          <Dropdown
            key={index}
            filterName={item.name}
            filterChildren={item.children}
            childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
            handleOpenChildren={() => handleOpenChildren(index)}
            handleSelectPrice={(childrenTab) => handlePrice(childrenTab)}
            activeTab={activeTab}
          />
        );

        dropdownsModal.push(
          <DropdownModal
            key={index}
            filterName={item.name}
            filterChildren={item.children}
            childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
            handleOpenChildren={() => handleOpenChildren(index)}
            handleSelectPrice={(childrenTab) => handlePrice(childrenTab)}
            activeTab={activeTab}
          />
        );
    } else if (item.name === 'Type') {
        dropdowns.push(
          <Dropdown
            key={index}
            filterName={item.name}
            filterChildren={item.children}
            childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
            handleOpenChildren={() => handleOpenChildren(index)}
            handleSelectType={(childrenTab) => handleType(childrenTab)}
            activeTab={activeTab}
          />
        );

        dropdownsModal.push(
          <DropdownModal
            key={index}
            filterName={item.name}
            filterChildren={item.children}
            childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
            handleOpenChildren={() => handleOpenChildren(index)}
            handleSelectType={(childrenTab) => handleType(childrenTab)}
            activeTab={activeTab}
          />
        );
    } else if (item.name === 'Occasion') {
        dropdowns.push(
          <Dropdown
            key={index}
            filterName={item.name}
            filterChildren={item.children}
            childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
            handleOpenChildren={() => handleOpenChildren(index)}
            selectOccasion={(childrenTab) => handleOccasion(childrenTab)}
            activeTab={activeTab}
          />
        );

        dropdownsModal.push(
          <DropdownModal
            key={index}
            filterName={item.name}
            filterChildren={item.children}
            childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
            handleOpenChildren={() => handleOpenChildren(index)}
            selectOccasion={(childrenTab) => handleOccasion(childrenTab)}
            activeTab={activeTab}
          />
        );
    } else {
      dropdowns.push(
        <Dropdown
          key={index}
          filterName={item.name}
          filterChildren={item.children}
          childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
          handleOpenChildren={() => handleOpenChildren(index)}
          handlePriceLowToHigh={(activeTab) => handleSortBy('priceLowToHigh', activeTab)}
          handlePriceHighToLow={(activeTab) => handleSortBy('priceHighToLow', activeTab)}
          sortByNewestProducts={(activeTab) => handleSortBy('newest', activeTab)}
          sortByOldestProducts={(activeTab) => handleSortBy('oldest', activeTab)}
          activeTab={activeTab}
        />
      );

      dropdownsModal.push(
        <DropdownModal
          key={index}
          filterName={item.name}
          filterChildren={item.children}
          childrenRef={el => childrenRef.current ? childrenRef.current[index] = el : null}
          handleOpenChildren={() => handleOpenChildren(index)}
          handlePriceLowToHigh={(activeTab) => handleSortBy('priceLowToHigh', activeTab)}
          handlePriceHighToLow={(activeTab) => handleSortBy('priceHighToLow', activeTab)}
          sortByNewestProducts={(activeTab) => handleSortBy('newest', activeTab)}
          sortByOldestProducts={(activeTab) => handleSortBy('oldest', activeTab)}
          activeTab={activeTab}
        />
      );
    }
  });

  const handleOpenFilterModal = () => {
    filterModalRef.current.className = "filter-modal filter-modal--show"
  }

  return (
    <>
      <div className="filter-bar">
        <div className="filter-bar__group">{dropdowns}</div>
        <div className="filter-bar__total">{countPr + textCountPr}</div>
        <div onClick={handleOpenFilterModal} className="filter-bar__button">
          <img src="/svgs/filter-btn.svg" alt="fitler button" />
        </div>
      </div>

      <FilterModal dropdownsModal={dropdownsModal} />
    </>
  )
}

function Dropdown ({
  filterName, filterChildren, childrenRef, handleOpenChildren, activeTab,
  handleSortBy, handleSelectPrice, handleSelectType, selectOccasion
}) {
  // storage the children tabs
  const childrenTabs = []
  // fetch children tabs
  filterChildren.forEach((name, index) => {
    let activeClass = activeTab === name ? 'filter-bar__children--active' : ''
    if (filterName === 'Sort by') {
      childrenTabs.push(
        <span 
          onClick={() => handleSortBy(name)} key={index}
          className={activeClass}
        >{name}</span>
      )
    } else if (filterName === 'Price') {
      childrenTabs.push(
        <span 
          onClick={() => handleSelectPrice(name)}
          className={activeClass} key={index}
        >{name}</span>
      )
    } else if (filterName === 'Type') {
      childrenTabs.push(
        <span 
          onClick={() => handleSelectType(name)}
          className={activeClass} key={index}
        >{name}</span>
      )
    } else if (filterName === 'Occasion') {
      childrenTabs.push(
        <span 
          onClick={() => selectOccasion(name)}
          className={activeClass} key={index}
        >{name}</span>
      )
    } else {
      childrenTabs.push(
        <span key={index} className={activeClass}>{name}</span>
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