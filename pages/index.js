import React, { useState } from "react";
import Index from "../components/Index";
import AlreadySaved from "../components/Already Saved";
import Error from "../components/Error";
import Saved from "../components/Saved";
import Introduction from "../components/Introduction";

export default function Home() {
  const [activePage, setActivePage] = useState("index");
  const [readArticle, setReadArticle] = useState(false);

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  const checkIfUserIsLoggedIn = (readArticle) => {
    const token = localStorage.getItem("token");
    if (token) {
      navigateToPage("introduction");
      setReadArticle(readArticle);
    }
  };

  return (
    <>
      {activePage === "index" && (
        <Index
          navigateToPage={navigateToPage}
          checkIfUserIsLoggedIn={checkIfUserIsLoggedIn}
        />
      )}
      {activePage === "saved" && <Saved navigateToPage={navigateToPage} />}
      {activePage === "error" && <Error navigateToPage={navigateToPage} />}
      {activePage === "introduction" && (
        <Introduction
          navigateToPage={navigateToPage}
          readArticle={readArticle}
        />
      )}
      {activePage === "already_saved" && (
        <AlreadySaved navigateToPage={navigateToPage} />
      )}
    </>
  );
}
