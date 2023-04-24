import styles from "./Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <h3>
          <Link href="/">TadBlog.</Link>
        </h3>
      </div>
    </nav>
  );
};

export default Nav;
