export default function Title (props) {
  return (
    <div className="content__title">
      <span>
        {props.children}
      </span>

      <div>
        <img src="/svgs/line-left-arrow-black.svg" alt="arrow" />
        <img src="/svgs/line-right-arrow-black.svg" alt="arrow" />
      </div>
    </div>
  )
}