import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

/**
 * Was Under layout div
 */

/*language=PostCSS*/
/* <style jsx global>{`//global stylesheet
  #layout {
    background-color: darkolivegreen;
  }
  `}
</style> */

export class Layout extends React.Component<{}, {}> {
  render() {
    const { children } = this.props;
    return <div id="layout">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>;
  }
}
