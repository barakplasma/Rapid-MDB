import * as React from "react";
import * as css from './Footer.css'
import * as classnames from "classnames";

export const Footer = props => (
  <footer className={classnames(css.footer)}>
    <h2>Made by Michael Salaverry</h2>
    <a href="http://github.com/barakplasma">Github</a>
  </footer>
);
