import { Route, Routes } from 'react-router-dom';
import { Home, SearchResult, SingleHotel } from './Pages';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel/>} />

    <Route path='/hotels/:address' element={<SearchResult />}></Route>
    </Routes>

  );
}

export default App;
