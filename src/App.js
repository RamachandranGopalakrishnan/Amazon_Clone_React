import { HomePage,NavBar} from './components';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
