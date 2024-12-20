import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Daily from './components/ui/Daily'

function App() {
  const [items, setItems] = useState([]) 
  const [isLoading, setIsLoading] = useState(true) 
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () =>{
      try{
        setIsLoading(true)
        const result = await axios(
          //Request for Manhattan area code
          `https://api.open-meteo.com/v1/forecast?latitude=39.1836&longitude=-96.5717&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant&temperature_unit=fahrenheit&timezone=auto`
        )
        console.log(result.data)

        setItems(result.data.daily)
        setIsLoading(false)
      }
      catch(error){
        console.error(error)
      }
    }

    fetchItems()
  }, [query])

  function queryFunction(q){
    setQuery(q)
  }

  return (
    <div className="App">
      Hello
      {isLoading ? (
        <p>loading...</p>
      ):
        <Daily max={items.temperature_2m_max} min={items.temperature_2m_min}/>
      }
      
    </div>
  );
}

export default App;
