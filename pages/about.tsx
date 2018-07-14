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
          div {
            padding-bottom: 1rem;
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
      <div>
        I didn't do much on the CSS/Design side in order to get more done on the SSR side. If I had spent more time, the rest of my effort would have gone towards design, and CSS. (Easy things like the menu as a horizontal list)
      </div>
      <div>
        I also didn't incorporate paging, although is how I would:
        <ol>
          <li>make the debounced input controlled</li>
          <li>set the state in index</li>
          <li>add next/prev link's which get the current page number and query from the state passed as props (similar to how search results are set)</li>
        </ol>
      </div>
      <div>
        Whenever possible, I tried to use CSS Grid and rems in order to keep the site as responsive as possible.
      </div>
      <div>
        I would ordinarily hide the api key on the server side, but I think it's nice for the client to have the power to fetch directly.
      </div>
    </div>
  </Layout>
);