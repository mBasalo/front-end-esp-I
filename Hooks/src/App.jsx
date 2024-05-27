import './App.css'
import ApiCall from './useEffect/ApiCall'
import DogGallery from './useEffect/DogGallery'
import Counter from './useState/Counter'

function App() {


  return (
    <>
    <h1>hooks</h1>
    <h2>useState</h2>
    < Counter />
    <h2>useEffect</h2>
     {/* <ApiCall /> */}
     <DogGallery />
    </>
  )
}

export default App
