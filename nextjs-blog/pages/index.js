import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const res = await fetch('http://127.0.0.1:3001/file?id=1',{method:'GET'})
  return {
    props: {
      allPostsData,
      result: await res.json()
    }
  }
}

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({allPostsData,result}=props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>从文件系统读取数据</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }=allPostsData) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
        <h2 className={utilStyles.headingLg}>读取express服务中数据</h2>
        <ul className={utilStyles.list}>
            {result.map(({ id, date, title }=result) => (
            <li className={utilStyles.listItem} key={id}>
              {id}
              <br />
              {title}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}