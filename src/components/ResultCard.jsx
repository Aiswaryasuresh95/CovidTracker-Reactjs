import React from 'react';


const ResultCard =({...res}) =>{
    const {country,cases,deaths,recovered,todayCases,todayDeaths,todayRecovered,active} =res;
    
    return(
        <div className="resultcontainer">
            
            <div className="cases">
            <label>Total Cases</label>
             <h3>+{todayCases}</h3>
               <h1>{cases}</h1>
               
            </div>
           
            <div className="active">
            <label>Active </label>
               <h1>{active}</h1>
               
            </div>
            
            <div className="recovered">
            <label>Recovered</label>
            <h3>+{todayRecovered}</h3>
               <h1>{recovered}</h1>
               
            </div>
            
            <div className="deceased">
            <label>Deceased</label>
            <h3>+{todayDeaths}</h3>
              <h1>{deaths}</h1> 
               
            </div>
            
        </div>
    )
}

export default ResultCard;