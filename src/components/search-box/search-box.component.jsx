import './search-box.style.css'

const SearchBox =({classname,placeholder,onChangeHandler})=> 
    (
      <div>
        <input
        className={`search-box ${classname}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
export default SearchBox