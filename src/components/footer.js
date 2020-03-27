import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="px-8">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a> by {siteTitle}
    </div>  

  </footer>
)

export default Footer
