import styles from "../../styles/Pages.module.css";
import { MdPanToolAlt } from "react-icons/md";
import { useEffect, useState } from "react";

import client from "../../lib/apollo-client";
import { gql } from "@apollo/client";

// get the token from local storage
function getToken() {
  try {
    return localStorage.getItem("token");
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function Introduction({ navigateToPage, readArticle }) {
  useEffect(() => {
    if (readArticle) {
      chrome.runtime.sendMessage(
        { message: "getCurrentTabInfo" },
        (response) => {
          if (chrome.runtime.lastError) {
            console.log("ERROR");
            console.error(chrome.runtime.lastError);
          } else {
            console.log("RESULT");
            console.log(response);
            const newThumbnail = response.favicon;
            const newTitle = response.title;
            const newHtmlContent = response.pTexts
              .map((text) => `<p>${text}</p>`)
              .join(", ");
            const newUrl = response.url;

            /* setThumbnail(response.favicon);
            setTitle(response.title);
            setHtmlContent(
              response.pTexts.map((text) => `<p>${text}</p>`).join(", ")
            );
            setUrl(response.url); */

            // creates bookmark
            createBookmark(newThumbnail, newTitle, newHtmlContent, newUrl);
          }
        }
      );
    }
  }, []);

  // request to backend new bookmark
  async function createBookmark(thumbnail, title, htmlContent, url) {
    const token = getToken();

    if (!token) {
      console.error("No token found");
      return;
    }

    await client
      .mutate({
        mutation: gql`
          mutation createBookmark(
            $thumbnail: String!
            $title: String!
            $htmlContent: String!
            $url: String!
          ) {
            bookmarkCreate(
              input: {
                bookmarkInput: {
                  thumbnail: $thumbnail
                  title: $title
                  htmlContent: $htmlContent
                  url: $url
                }
              }
            ) {
              bookmark {
                id
                thumbnail
                url
                title
                summary
                isTrue
                user {
                  id
                  email
                  name
                }
              }
            }
          }
        `,
        variables: { thumbnail, title, htmlContent, url },
        context: {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
        fetchPolicy: "network-only",
      })
      .then((response) => {
        console.log("response", response);
        if (response.data.bookmarkCreate == null) {
          navigateToPage("already_saved");
        } else {
          navigateToPage("saved");
        }
      })
      .catch((error) => {
        console.log("error", error);
        // check if the error is "Url has already been taken"
        if (error.message.includes("Url has already been taken")) {
          navigateToPage("already_saved");
          return;
        } else {
          navigateToPage("error");
        }
      });
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <MdPanToolAlt size={40} color="#1A73E8" />
          <p>
            <strong>You are in!</strong>
          </p>
          <p className={styles.descriptionUnderline}>
            Try using the extension now! You can save any article you want. Just
            close the extension and open it again to save another article.
          </p>
        </div>
      </main>
    </div>
  );
}
