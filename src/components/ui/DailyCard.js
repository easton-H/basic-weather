import React from "react";

function DailyCard({max, min}){
    return(
        <div className="card">
            <strong>High: </strong> {max}
            <strong>Low: </strong> {min}
        </div>
    )
    
}

export default DailyCard