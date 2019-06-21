import React from "react"
import { Link } from "gatsby"

import { Glasses } from "../components/image"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Glasses />
    <Link to="/page-2/">Page 2</Link>
  </Layout>
)

export default IndexPage
