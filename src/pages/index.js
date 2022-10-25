import React from "react"
import Layout from "../components/Layout"
import Faq from "../data/faq.js"
import Card from "../components/Card"

export default function Home() {
  return (
    <Layout>
      <img className="w-screen" src="/images.png" alt="" />
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-black text-2xl mb-10">FAQ</h1>
        <h1 className="text-gray-600 mb-4">
         <span className="text-black font-medium">PLEASE NOTE:</span>  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Incidunt excepturi voluptate perspiciatis, laboriosam delectus odio
          dolorem officiis. Tenetur, impedit error.
        </h1>
        {Faq.map(faq => {
          return (
            <Card key={faq.id} answer={faq.answer} question={faq.question} />
          )
        })}
      </div>
    </Layout>
  )
}
