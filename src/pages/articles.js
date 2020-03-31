import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO 
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="px-4">
      <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
        <h1 className="text-2xl font-medium mb-2">Start with Gatsby</h1>
        <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">My works</h2>
        <p class="text-sm text-gray-500 flex items-center pb-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="text-gray-500 w-3 h-3 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        2020-03-29 23:01:34
        </p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.
        <div className="py-5">
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2">#gatsby</span>
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2">#tailwind</span>
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2">#tailwindcss</span>
          <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-xs font-semibold text-black">#react</span>
        </div>
        <h1 className="text-2xl font-medium mb-2">About tailwind CSS</h1>
        <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">My works</h2>
        <p class="text-sm text-gray-500 flex items-center pb-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="text-gray-500 w-3 h-3 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        2020-03-28 14:31:34
        </p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque, odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae.
        <div className="py-5">
          <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2">#gatsby</span>
          <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-xs font-semibold text-black">#react</span>
        </div>
      </div>
    </div>

  </Layout>
)

export default ArticlesPage
