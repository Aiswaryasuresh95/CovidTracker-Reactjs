import React from "react";
import './chart.css';

import {Bar} from "react-chartjs-2";

const Chart = ({...res}) =>{

    const {country,cases,deaths,recovered,active} =res;


    return(
        
         <Bar className="chart--container"
         data={{
             labels:['Total Cases','Active Cases','Recovered','deaths'],
             datasets:[{
                label:country ? 'World wide' : country ,
                data:[cases,active,recovered,deaths],
                backgroundColor: [
 
                  '#ffe6ff',
                   '#ffe6e6',
                   '#e6ffe6',
                   '#f0f5f5'

                ],
             }]
            
         }}
         width={400}
         height={200}
         options={{
             responsive:true,
             maintainAspectRatio:true,
         }}
        
        
         />

    )
}

export default  Chart;