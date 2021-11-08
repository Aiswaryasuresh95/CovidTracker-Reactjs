import React ,{useState,useEffect} from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ShowResult from './components/showResult';

import Chart from './components/chart';

function App() {
  // **********State values*************//

  const [results,setResults]=useState([]);
  const [searchItem,setSearchItem] =useState('');
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState('');

  // **********Form handling***********//

 


  useEffect(() => {
    FetchOnLoading();
    
  },[]);


  const FetchOnLoading= async () =>{


    try {
    setLoading(true)
    const response=await fetch(`https://disease.sh/v3/covid-19/all`);
    const newData=await response.json();
    setResults([newData]);
    setLoading(false)
    
    } catch (error) {
      setError(error);
    }}




  const handleChange = (e) =>{
    setSearchItem(e.target.value);
  }


  
  
  const handleSubmit =(e) =>{
      e.preventDefault();
      const FetchResult= async () =>{

      try {
      setLoading(true)
      const response=await fetch(`https://disease.sh/v3/covid-19/countries/${searchItem}?yesterday=true&strict=true`);
      const newData=await response.json();
      setResults([newData]);
      setLoading(false) 
      console.log(results)
      
      } catch (error) {
        console.log(error);
      }}
   FetchResult();
  }
  
  
     

  return (
    <section className="main">
    
    <SearchForm 
    searchItem={searchItem} 
    handleChange={handleChange} 
    handleSubmit={handleSubmit}/>

   <ShowResult results={results} loading={loading} error={error} />
  
      
  
    </section>
    
  );

}

export default App;
