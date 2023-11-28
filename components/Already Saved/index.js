import styles from "../../styles/Pages.module.css";
import { MdBookmarkBorder } from "react-icons/md";

export default function AlreadySaved({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <MdBookmarkBorder size={40} color="#FF9500" />
          <p>
            <strong>Hum, this looks familiar</strong>
          </p>
          <p className={styles.descriptionUnderline}>
            Looks like this link is already in your bookmark library
          </p>
        </div>
      </main>
    </div>
  );
}
