import styles from "../layout/Navbar/styles.module.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import Banner from "../Banner/Banner";
import NewServiceForm from "../Services/NewServiceForm";

const Main = () => {
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.reload();
  // };
  return (
    <div>
      <nav className={styles.navbar}>
        <Navbar />
      </nav>
      <Banner />
      <NewServiceForm />
      <Footer />
    </div>
  );
};

export default Main;
