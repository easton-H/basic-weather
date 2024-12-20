import React from 'react'
import DailyCard from './DailyCard'

function Daily({max, min}){
    const days = []
    for(let i = 0; i < 7; i++){
        days.push(<DailyCard max={max[i]} min={min[i]} key={i}/>)
    }
    return(
        <div className="daily">
            {days}
        </div>
    )
    
}

export default Daily