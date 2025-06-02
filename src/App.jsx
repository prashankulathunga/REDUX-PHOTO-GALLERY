import Gallery from './components/Gallery'
import Pagination from './components/Pagination'
import ThemeButton from './components/ThemeButton'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const isTheme = useSelector((state)=>state.theme.darkMode)

  return (
    <>
     <div className={`min-h-screen text-center pt-16 ${isTheme? 'bg-white': 'bg-black'}`}>
     <h1 className={`font-bold text-4xl ${isTheme? 'text-black': 'text-white'}`}>Photo Gallery</h1>
     <div>
      <ThemeButton/>
     </div>
     <div>
      <Gallery/>
     </div>
     <div>
      <Pagination/>
     </div>
     </div>
    </>
  )
}

export default App
