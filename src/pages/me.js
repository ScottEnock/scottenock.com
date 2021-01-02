import React from "react"
import Layout from "../components/Layout"

export default function me() {
  return (
    <Layout>
      <div className="article-content">
        <h1>About Me</h1>
        <p>I'm Scott.</p>
        <p>Scott Rowland Gabriel Enock. I specialise in Javascript.</p>
        <p>Here, I post things I stmbled across in life:</p>
        <p>Development tips, photos, reviews, whatever is of interest to me.</p>
        <h2>What I'm Doing Now</h2>
        <p>
          I enjoy Derek Sivers. An idea he raised in a podcast I listened to
          talked about including a "what I'm doing now" page to let readers know
          just that. I think it's a cool idea, so here it is:
        </p>
        <ul>
          <li>
            Working at{" "}
            <a
              href="https://sentai.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sentai{" "}
            </a>
            .
          </li>
          <li>Writing content over here and around the web.</li>
          <li>Getting into game development.</li>
          <li>Dipping my toes into open source.</li>
        </ul>
        <h2>Where you can find me</h2>
        <ul>
          <li>
            Github:{" "}
            <a
              href="https://github.com/ScottEnock"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scott Enock
            </a>
          </li>
          <li>
            YouTube:{" "}
            <a
              href="https://www.youtube.com/user/TheIntrovertGamer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scott Enock
            </a>{" "}
            <a
              href="https://www.youtube.com/channel/UCP2n-gLVtSA0ogYtx0qCw1g"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scott Enock Dev
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
