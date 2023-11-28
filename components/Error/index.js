import styles from "../../styles/Pages.module.css";
import { MdErrorOutline } from "react-icons/md";

export default function Error({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <MdErrorOutline size={40} color="#FF3B30" />
          <p>
            <strong>Fuck you, we're not saving that</strong>
          </p>
          <p className={styles.descriptionUnderline}>
            We had a problem saving this bookmark, please try again later
          </p>
        </div>
      </main>
    </div>
  );
}
