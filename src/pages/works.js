import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WorksPage = () => (
  <Layout>
    <SEO 
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="px-4">
      <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
        <h1 className="text-2xl font-medium mb-2">Works page</h1>
        <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">My works</h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.
        <div className="mt-4">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to="/">Back to home page</Link>
          </button>
        </div>
      </div>
    </div>

  </Layout>
)

export default WorksPage
