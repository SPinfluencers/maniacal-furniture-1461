import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './Components/AllRoutes/AllRoutes'
import style from './Components/Styles/App.css'
import SearchMenu from './Components/Navbar/SearchMenu'

function App() {

  return (
    <div className="App">
     <Navbar />
     <SearchMenu />
     <AllRoutes />
    </div>
  )
}

export default App
