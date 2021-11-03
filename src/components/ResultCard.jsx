import React from 'react';
import Loader from './Loader';



const ResultCard =({loading,error,...res}) =>{
  
  
    const {country,cases,deaths,recovered,todayCases,todayDeaths,todayRecovered,active} =res;
  
    
    return(
        <div className="resultcontainer">

        <div className="cases">
           {loading ? <Loader /> :
            <div>
                <label>Total Cases</label>
                <h3>+{todayCases}</h3>
                <h1>{cases}</h1>
            </div>
           }
          
          </div>

            
        <div className="active">
            {loading ? <Loader /> :
              <div>
                <label>Active </label>
                <h1>{active}</h1>
               </div>
            } 
         </div>

            
        <div className="recovered">
            {loading ? <Loader /> :
              <div>
                <label>Recovered</label>
                <h3>+{todayRecovered}</h3>
                  <h1>{recovered}</h1>
               </div>
            }         
            </div>

         <div className="deceased">
            {loading ? <Loader /> :
              <div>
                <label>Deceased</label>
                <h3>+{todayDeaths}</h3>
                  <h1>{deaths}</h1> 
                  </div>
               }
            </div>
        
      
            
        </div>

    )
}

export default ResultCard;