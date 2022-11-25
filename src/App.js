import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';
import Quotes from './pages/Quotes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character/:charId' element={<CharacterDetail />} />
          <Route path='/quotes' element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
