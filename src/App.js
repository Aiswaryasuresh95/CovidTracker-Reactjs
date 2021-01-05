import React ,{useState,useEffect} from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ShowResult from './components/showResult';


function App() {
  // **********State values*************//

  const [results,setResults]=useState([]);
  const [searchItem,setSearchItem] =useState('');

  // **********Form handling***********//

  const handleChange = (e) =>{
    setSearchItem(e.target.value);
  }


  const handleSubmit =(e) =>{
      e.preventDefault();
      const FetchResult= async () =>{

      try {
      const response=await fetch(`https://disease.sh/v3/covid-19/countries/${searchItem}?yesterday=true&strict=true`);
      const newData=await response.json();
      setResults([newData]);
      
      } catch (error) {
        console.log(error);
      }}
   FetchResult();
  }
  
  
     

  return (
    <section>
    
    <SearchForm 
    searchItem={searchItem} 
    handleChange={handleChange} 
    handleSubmit={handleSubmit}/>

    
   <ShowResult Results={results} />
   
    
    
    </section>
    
  );

}

export default App;
