import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header>
      <nav className="flex items-center flex-wrap p-6">
        <Link href="/" passHref>
          <a className="inline-flex items-center p-2 mr-4">
            <Image className="rounded-full" src="/logo.jpg" alt="Pepe Le Krabs" width={150} height={150} />
          </a>
        </Link>
        <h1 className="py-10 mx-20 text-4xl font-bold">What could Mongoose do to Crypto Coin?</h1>
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
          <a href="https://traderjoexyz.com/#/trade?outputCurrency=0xd74cca216f7c8fe33f0911da8698e2b3efc98835" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center bg-red-700 hover:bg-red-900 text-white'>
            Buy $MONG
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header