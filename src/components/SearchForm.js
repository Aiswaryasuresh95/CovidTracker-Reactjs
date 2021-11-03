import React from 'react';


const SearchForm =({searchItem,handleSubmit,handleChange}) =>{
    return(
        <header className="headerclass">
        <form onSubmit={handleSubmit} className="searchform">
            <input 
            type="text"
            onChange={handleChange}
            value={searchItem}
            placeholder="type a country name ........"
            className="searchinput"
            
            />
            

        </form>
    </header>
    )
}
export default SearchForm;
