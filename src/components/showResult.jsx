import React from 'react';
import ResultCard from './ResultCard';

const ShowResult =({Results})=>{
    
    return(
        <div>
            {Results.map((res,index)=>{
                return(
                    <ResultCard key={index} {...res} />
                )
            })}
        </div>
    )
}

export default ShowResult;