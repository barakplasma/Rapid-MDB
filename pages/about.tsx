import * as React from 'react'
import {Layout} from '../src/components/Layout'

export default props => (
  <Layout>
    <div>
      {/*language=PostCSS*/}
      <style jsx>
        {`
          * {
            color: darkred;
          }
        `}
      </style>
      <h1>About</h1>
      <div>
        This is an attempt at using Server Side Rendering, React, Typescript,
        isomorphic fetch, and Redux to bring to you a new level of movie going
        experience.
      </div>
      <div>
        There are multiple deeplinks attached to the client/server side
        rendering of this site. Namely, on the view a movie page, and the home search page.
      </div>
    </div>
  </Layout>
);