import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import styles from "../App.module.css";

const About = () => {
  return (
    <>
      <Header />
      <div className={styles["rounded-box2"]}>
        <p>
          This is the first react assignmet of the React course-Chas Academy.
          This is a Todo list app. You can add your todos and remove them from
          your list when you are done with your task. 2024{" "}
        </p>
      </div>
    </>
  );
};

export default About;
