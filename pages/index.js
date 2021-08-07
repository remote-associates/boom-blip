import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="BOOMBLIP" />
        <p className="description">
          Inside out. Upside down.
        </p>
      </main>

      <Footer />
    </div>
  )
}
