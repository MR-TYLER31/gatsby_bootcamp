import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
      <Layout>
        <Head title="Contact"/>
        <h1>Contact</h1>
      <p>
        Phone: 444-555-6678
        <br />
        Email: tyler@gmail.com
        <br />
        Twitter: <a href="https://twitter.com/Tsnyder406" target="_blank">
          @Tsnyder406
        </a>
      </p>
      </Layout>
  )
}

export default ContactPage
