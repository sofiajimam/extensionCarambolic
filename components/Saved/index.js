import styles from "../../styles/Pages.module.css";
import { MdCheck } from "react-icons/md";

export default function Saved({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <MdCheck size={40} color="#34C759" />
          <p>
            <strong>Bookmark succesfully saved!</strong>
          </p>
          <p className={styles.descriptionUnderline}>
            You can now find this bookmark in your Carambolic
          </p>
        </div>
      </main>
    </div>
  );
}
