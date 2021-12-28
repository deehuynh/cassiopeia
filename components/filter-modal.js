/* eslint-disable @next/next/no-img-element */
import preventBodyScroll from "../function/preventBodyScroll"

export default function FilterModal ({filterModalRef, dropdownsModal}) {
  const handleCloseModal = () => {
    filterModalRef.current.className = "filter-modal filter-modal--hidden";
    preventBodyScroll(false)
  }

  return (
    <div ref={filterModalRef} className="filter-modal filter-modal--hidden">
      <header className="filter-modal__header">
        <div onClick={handleCloseModal} className="filter-modal__close-btn">
          <img src="/svgs/close-btn.svg" alt="close" />
        </div>
      </header>

      {dropdownsModal}
    </div>
  )
}

export const DropdownModal = ({
  filterName, filterChildren, mobileChildrenRef, handleOpenChildren, activeTab,
  handleSortBy, handleSelectPrice, handleSelectType, selectOccasion
}) => {
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

  console.log(mobileChildrenRef)

  return (
    <div
      onClick={handleOpenChildren}
      className="filter-modal__group"
    >
      <div className="filter-modal__tab">
        {filterName}
        <img src="/svgs/dropdown-i.svg" alt="dropdown arrow" />
      </div>

      <div ref={mobileChildrenRef} className="filter-modal__children filter-modal__children--hidden">
        {childrenTabs}
      </div>
    </div>
  )
}