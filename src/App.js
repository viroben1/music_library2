import { DataContext } from './context/DataContext'
import { useEffect, useState, useRef } from 'react'
import { SearchContext } from './context/SearchContext'
import Gallery from './components/Gallery'
import SearchBar from './components/SeachBar'
const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')
  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
      if(search) {
          
     }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
        document.title = `${term} Music`
        const response = await fetch(API_URL + term)
        const resData = await response.json()
        if (resData.results.length > 0) {
            return setData(resData.results)
        } else {
            return setMessage('Not Found.')
        }
    }
    fetchData()
}


  return (
      <div>
          <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
            }}>
                <SearchBar />
            </SearchContext.Provider>
          {message}
          <DataContext.Provider value={data} >
                <Gallery />
            </DataContext.Provider>
      </div>
  )
}

export default App
