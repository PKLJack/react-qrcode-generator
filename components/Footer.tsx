import React from "react"
import { Icon, Segment } from "semantic-ui-react"
import style from "./Footer.module.scss"

const Footer = () => {
  const sourceUrl = "https://github.com/PKLJack/react-qrcode-generator"

  const reactUrl = "https://reactjs.org/"
  const nextjsUrl = "https://nextjs.org/"

  return (
    <footer className={style.footer}>
      <div>
        Made by
        <a href="https://github.com/PKLJack" className="footer__link code">
          <Icon name="github" />
          PKLJack
        </a>
      </div>
      <div>
        <a className={`${style.code}`} href={sourceUrl}>
          view source
        </a>
      </div>
      <div>
        Build with{" "}
        <span className={`${style.footer__buildwith} ${style.code}`}>
          <a href={reactUrl}>React</a>
          <a href={nextjsUrl}>(Next.js)</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
