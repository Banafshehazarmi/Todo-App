import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import TodoPage from "./Pages/TodoPage";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
