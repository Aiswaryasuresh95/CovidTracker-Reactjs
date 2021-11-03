import React from 'react';
import ResultCard from './ResultCard';
import Loader from './Loader';
import Chart from './chart';
const ShowResult =({results,loading,error})=>{
    
    return(
        <div className="result">
            {results.map((res,index)=>{
                return(
                    <div>
                    <ResultCard key={index} loading={loading} error={error} {...res}  />
                    <Chart {...res}/>
                    </div>
                )
            })}

      
        </div>
    )
}

export default ShowResult;