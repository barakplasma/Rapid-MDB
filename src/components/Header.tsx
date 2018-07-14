import * as React from "react";
import * as classnames from "classnames";

import { Nav } from "./Nav";
import * as css from "./Footer.css";

export class Header extends React.Component<undefined, undefined> {
  render() {
    return (
      <div className={classnames(css.footer)}>
        <h2>OMDb based Movie Search</h2>
        <Nav />
      </div>
    );
  }
}
