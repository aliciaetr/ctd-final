
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import { useGlobalState } from "./Components/utils/global.context";


function App() {
  const { state } = useGlobalState()
  return (
      <div className={`${state.theme} main-container`}>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dentista/:id" element={<Detail />} />
              <Route path="/favs" element={<Favs />} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
