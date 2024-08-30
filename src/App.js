import { Route, Routes } from 'react-router-dom';
import { Home, SearchResult, SingleHotel, Wishlist } from './Pages';
import './App.css';
import { Filter } from './components/Filters/Filter';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel/>} />

    <Route path='/hotels/:address' element={<SearchResult />}></Route>
    <Route path="/filter" element={<Filter/>}></Route>
    <Route path='/wishlist' element={<Wishlist/>} />
    </Routes>

  );
}

export default App;
