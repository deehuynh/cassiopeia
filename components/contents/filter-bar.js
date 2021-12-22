/* eslint-disable @next/next/no-img-element */
export default function FilterBar ({allFilters, countPr = '0'}) {
  const dropdowns = [];
  allFilters && allFilters.forEach((item, index) => {
    dropdowns.push(
      <Dropdown
        key={index}
        filterName={item.name}
        filterChildren={item.children}
      />
    );
  });
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

function Dropdown ({filterName, filterChildren}) {
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
      <div className="filter-bar__tab">
        <span>{filterName}</span>
        <img src="/svgs/dropdown-i.svg" alt="dropdown arrow" />
      </div>

      <div className="filter-bar__children">
        {childrenTabs}
      </div>
    </div>
  )
}