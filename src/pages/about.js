import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from "../components/head"

const AboutPage = () => {
    return (
      <Layout>
        <Head title="About"/>
        <h1>About Me</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p><Link to="/contact">Contact me.</Link></p>
      </Layout>
    )
}

export default AboutPage