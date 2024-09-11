import { useState } from 'react'

const fruits = [
  "Apple",
  "Pawpaw",
  "PineAapple",
  "Cucumber",
  "Orange",
  "Banana",
  "Mango",
  "Almond",
  "pear",
  "Watermelon"
]

function App() {
  const [fruitsData] = useState(fruits);
  const [searchTerm, setSearchTerms] = useState('');

  const handleChange = (e: any) => {
    setSearchTerms(e.target.value);
    
  }

  const fruitsDataFiltered = fruitsData.filter((fruit) => 
    fruit.toLocaleLowerCase().includes(searchTerm .toLocaleLowerCase())
  )

  return (
    <div>
     <input onChange={handleChange} type={'text'} placeholder='search'  />
     {fruitsDataFiltered.map((fruit, index) => {
      return <div key={index}>
        <p>{fruit}</p>
      </div>;
     })}

    </div>
  )
}

export default App
