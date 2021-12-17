export default function SearchInput () {
  return (
    <input
      ref={searchRef}
      className='header__search--hiden'
      type="text" defaultValue='' placeholder='Search' 
    />
  )
}