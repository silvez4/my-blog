import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem 
      slug = "/about/"
      background = "red"
      category = "Misc"
      date = "30 de Julho de 2020"
      timeToRead = "5"
      title = "Diga Não as Drogas"
      description = "Tudo para fugir do vicio" 
    />
  </Layout>
)

export default IndexPage
