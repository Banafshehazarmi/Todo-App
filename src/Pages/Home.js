import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import styles from "../App.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles["rounded-box"]}>
        <h2>Welcome to Homepage</h2>
        <p>
          Welcome to our app. We hope you like it. You can use this app on you
          phone to track your daily todos.{" "}
        </p>
      </div>
    </>
  );
};

export default Home;
