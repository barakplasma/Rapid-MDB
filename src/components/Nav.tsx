import * as React from "react";
import Link from "next/link";

export const Nav = props => (
  <nav>
    <h4>Menu</h4>
    <ul>
      <li>
        <Link href="/">
          <a>Home - Search</a>
        </Link>
      </li>
      <li>
        <Link href="/MovieDetails?imdbID=tt0137523">
          <a>View a Movie</a>
        </Link>
      </li>
      <li>
        <Link href="/SSR">
          <a>Check SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
);
