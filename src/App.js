import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import { action,originals} from './urls';
import RowPost from './Components/Movies/RowPost';

function App() {
  return (
   <>  
   
    <NavBar />
   <Hero  />
<RowPost url={originals}/>
<RowPost  url={action}  title='Action' isSmall/>
   </>
  );
}

export default App;
