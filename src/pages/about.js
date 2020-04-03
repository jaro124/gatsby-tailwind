import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO 
      title="About me" 
      description="A few words about me." 
      keywords={["gatsby", "tailwind", "react", "tailwindcss", "about"]}
    />

    <div className="px-4">
      <div className="max-w-4xl bg-secondary rounded-lg mx-auto my-8 p-16">
        <h1 className="text-2xl font-medium text-primary mb-2">About me</h1>
        <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">A few words about me</h2>
        <p className="text-sm text-gray-600 flex items-center pb-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          className="text-gray-500 w-5 h-5 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        2020-03-29 23:01:34
        </p>
        <p className="text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.</p>
        <p className="text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.</p>
        <div className="mt-4">
          <button aria-label="Articles" className="bg-blue-400 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 mt-2">
            <Link to="/articles">Articles</Link>
          </button>
          <button aria-label="Back to home page" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 mt-2">
            <Link to="/">Back to home page</Link>
          </button>
        </div>
      </div>
    </div>

  </Layout>
)

export default AboutPage
