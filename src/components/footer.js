import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="w-futt h-16 bg-secondary text-primary mx-auto p-4 md:p-4">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" className="border-b-2 border-transparent hover:border-indigo-400">Gatsby</a> and <a href="https://tailwindcss.com/" className="border-b-2 border-transparent hover:border-indigo-400">Tailwind CSS</a> by {siteTitle}
    </div>  

  </footer>
)

export default Footer
