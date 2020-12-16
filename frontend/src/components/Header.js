import React from "react";

function Header({ loggedIn, LogoutFunction, userAuthInfo }) {
  return (
    <header className="Header">
      <nav className="Header nav">
        {loggedIn && (
          <a href="/">
            <span class="whenLoggedIn">klasses</span>
          </a>
        )}
        {loggedIn && (
          <a href={`/profile/${userAuthInfo.uid}`}>
            <span class="whenLoggedIn">my profile</span>
          </a>
        )}
        {loggedIn && (
          <a href="/create-klass">
            <span class="whenLoggedIn">submit a klass!</span>
          </a>
        )}
        {!loggedIn && (
          <a href="/create-account">
            <span class="whenLoggedIn">sign up</span>
          </a>
        )}
        {!loggedIn && (
          <a href="/login">
            <span class="whenLoggedIn">login</span>
          </a>
        )}
        {loggedIn && (
          <a href="" onClick={() => LogoutFunction()}>
            <span class="whenLoggedIn">log out</span>
          </a>
        )}
      </nav>
    </header>
  );
}

export default Header;
