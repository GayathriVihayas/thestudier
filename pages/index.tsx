import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from "../src/Homepage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Edugauge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-serif">
        <Homepage />
      </main>
    </div>
  )
}

export default Home
