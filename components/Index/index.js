import styles from "../../styles/Pages.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
/* import { signInWithGoogle } from "../../lib/firebase"; */

export default function Index({ navigateToPage, checkIfUserIsLoggedIn }) {
  const [email, setEmail] = useState("");

  /* const handleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("RESULT");
        console.log(result);
      })
      .catch((error) => {
        console.log("ERROR");
        console.error(error);
      });
  };
 */

  useEffect(() => {
    checkIfUserIsLoggedIn(true);
  }, []);

  // make it async
  const handleSignIn = async () => {
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_URL_BACKEND}/login`,
        { email: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("RESPONSE");
        console.log(response);
        localStorage.setItem("token", response.data.token);
        // check if user is logged in
        checkIfUserIsLoggedIn(false);
      })
      .catch((error) => {
        console.log("ERROR");
        console.error(error);
        //navigateToPage("error");
      });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
        {/* Add your logo here */}
        <div style={{ alignSelf: "left" }}>
          <img src="/icons/carambolic.png" alt="Logo" width="30" height="30" />
        </div>
        <h1>Your bookmarks, on steroids</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSignIn();
              }
            }}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              boxSizing: "border-box",
              outline: "none",
              fontFamily: "inherit",
            }}
          />

          <p className={styles.bottomText}>
            We only need a way to sync your bookmarks with our app
          </p>
        </div>
      </main>
    </div>
  );
}
