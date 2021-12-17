export default function SearchInput ({searchRef}) {
  return (
    <input
      ref={searchRef}
      className='header__search--hiden'
      type="text" defaultValue='' placeholder='Search' 
    />
  )
}