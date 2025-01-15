import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>人民万岁</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="战无不胜的毛泽东思想万岁" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
