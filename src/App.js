import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import RowPost from './Components/Movies/RowPost';

function App() {
  return (
   <>  
   
    <NavBar />
   <Hero />
<RowPost  />
<RowPost  title='Action' isSmall/>
   </>
  );
}

export default App;
