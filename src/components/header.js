import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import { useTheme } from "../utils/themeContext"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { toggleTheme } = useTheme()
  const { site } = useStaticQuery(graphql`
    query HeaderTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-secondary shadow-lg">
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
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          aria-label="Menu"
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-primary"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
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

          <button
            aria-label="Toggle theme"
            className="focus:outline-none mt-4 md:mt-0"
            onClick={toggleTheme}>
            <svg 
              version="1.1" 
              id="Capa_1" 
              width="24" 
              height="24" 
              className="fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px"
              viewBox="0 0 312.999 312.999"
            >
		        <path d="M305.6,178.053c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4
			        c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4
			        c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.8,60-32.8,96.4c0,43.6,17.6,83.2,46.4,112s68.4,46.4,112,46.4
			        c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314.4,184.853,311.2,179.253,305.6,178.053z M244.4,261.653
			        c-23.2,18.4-52.8,29.6-85.2,29.6c-38,0-72.4-15.6-97.2-40.4c-24.8-24.8-40.4-59.2-40.4-97.2c0-31.6,10.4-60.4,28.4-83.6
			        c12.4-16,28-29.2,46-38.4c-2,4.4-4,8.8-5.6,13.6c-5.2,14.4-7.6,29.6-7.6,45.6c0,38,15.6,72.8,40.4,97.6s59.6,40.4,97.6,40.4
			        c16.8,0,32.8-2.8,47.6-8.4c5.2-2,10.4-4,15.2-6.4C274,232.453,260.8,248.853,244.4,261.653z"/>
            </svg>
          </button>          
        </nav>

        
        

      </div>
    </header>
  );
}

export default Header;
