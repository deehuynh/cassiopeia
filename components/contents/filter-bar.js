/* eslint-disable @next/next/no-img-element */
export default function FilterBar ({allFilters}) {
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
  return (
    <div className="filter-bar">
      <div className="filter-bar__group">{dropdowns}</div>
      <div className="filter-bar__total">24 items</div>
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
  return (
    <div className="filter-bar__dropdown">
      <div>
        <span>{filterName}</span>
        <img src="/svgs/dropdown-i.svg" alt="dropdown arrow" />
      </div>
    </div>
  )
}