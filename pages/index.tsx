import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'
import IFrame from '../components/IFrame'
import Blurbs from '../components/Blurbs'

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-50 text-gray-900">
      <Head>
          <title>Mongoose Coin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Blurbs />
        <main className="flex flex-col items-center justify-center w-full flex-1 mt-20 px-5 md:px-20 text-center">
          <h1 className="text-6xl font-bold">
            The First Mongoose Crypto Coin!
          </h1>

        <div className="flex flex-row items-center justify-center w-full">
          <div className="pt-20 w-full">
            <IFrame
              title="Trade on Traderjoe"
              src={"https://traderjoexyz.com/#/trade?outputCurrency=0xd74cca216f7c8fe33f0911da8698e2b3efc98835"}
            />
          </div>
        </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home