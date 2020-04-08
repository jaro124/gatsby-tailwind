import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer>

    <div class="flex">
      <div class="w-1/2 max-w-4xl bg-secondary text-primary">
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-4">
        <Link className="flex items-center no-underline text-primary" to="/">
            <svg 
              width="32" 
              height="36" 
              className="fill-current text-primary"
              viewBox="0 0 32 36" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path>
            </svg>
            <span className="font-bold text-xl tracking-tight pl-3">
            {siteTitle}
            </span>
          </Link>
        </div>
      </div>
      <div class="w-1/2 max-w-4xl bg-secondary text-primary">
        <div className="flex flex-wrap items-center max-w-4xl mx-auto p-4 md:p-4">
        
      <nav
          className="md:block md:flex md:items-center w-full md:w-auto"
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/articles`,
              title: `Articles`
            },
            {
              route: `/about`,
              title: `About`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-primary border-b-2 border-transparent hover:border-indigo-400"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}         
        </nav>
        </div>
      </div>
    </div>

    <div className="w-full text-center p-8 bg-secondary text-primary">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" className="border-b-2 border-transparent hover:border-indigo-400">Gatsby</a> and <a href="https://tailwindcss.com/" className="border-b-2 border-transparent hover:border-indigo-400">Tailwind CSS</a> by {siteTitle}
    </div>  

  </footer>
)

export default Footer
