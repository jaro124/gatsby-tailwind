import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="px-4">
      <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
        <h1 className="text-2xl font-medium mb-2">Let's Build: With Tailwind CSS</h1>
        <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Tailwind CSS</h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.
        <div className="mt-4">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to="/works/">Read more</Link>
          </button>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
