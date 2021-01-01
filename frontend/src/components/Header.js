import React from "react";

function Header({ loggedIn, LogoutFunction, userAuthInfo }) {
  return (
    <header className="bg-black p-7">
      <nav className="text-right text-purple-600 font-bold">
        {loggedIn && (
          <a href="/">
            <span className="px-2 hover:text-purple-300">Klasses</span>
          </a>
        )}
        {loggedIn && (
          <a href={`/profile/${userAuthInfo.uid}`}>
            <span className="px-2 hover:text-purple-300">Posted by Me</span>
          </a>
        )}
        {loggedIn && (
          <a href="/create-klass">
            <span className="px-2 hover:text-purple-300">Submit</span>
          </a>
        )}
        {!loggedIn && (
          <a href="/create-account">
            <span className="px-2 hover:text-purple-300">Sign Up</span>
          </a>
        )}
        {!loggedIn && (
          <a href="/login">
            <span className="px-2 hover:text-purple-300">Login</span>
          </a>
        )}
        {loggedIn && (
          <a href="" onClick={() => LogoutFunction()}>
            <span className="px-2 hover:text-purple-300">Logout</span>
          </a>
        )}
      </nav>
    </header>
  );
}

export default Header;
