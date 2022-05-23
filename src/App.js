import './App.css';
import MainPage from './MainPage/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './BlogPage/Blog';
import Games from './GamePage/Game';
import Information from './Information/Information';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} exact={true} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Information" element={<Information />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
