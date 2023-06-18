import './App.css';

import Header from './componets/Header/Header';
import HomePage from './pages/home/HomePage';
import CategoryPage from './pages/category/CategoryPage';
import AboutPage from './pages/about/AboutPage';
import ItemPage from './pages/item/ItemPage';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/item/:id' element={<ItemPage/>}/>
          <Route path='/category/:categoryId' element={<CategoryPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;