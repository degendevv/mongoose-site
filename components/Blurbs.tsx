import React from 'react'

const Blurbs: React.FC = () => {
  return (
  <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
    <a
      href="https://snowtrace.io/token/0xD74CCA216F7c8Fe33f0911da8698E2B3eFc98835?a=0x000000000000000000000000000000000000dead"
      className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    >
        <h3 className="text-2xl font-bold">Token Burn &rarr;</h3>
        <p className="mt-4 text-xl">
          50% of supply burnt and counting!
        </p>
    </a>

      <a
        href="#"
        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
      >
        <h3 className="text-2xl font-bold">Tax (10% Slippage)&rarr;</h3>
        <p className="mt-4 text-xl">
          9% tax - 3% burned, 3% to holders, 3% to developers
        </p>
      </a>

      <a
        href="https://snowtrace.io/token/0x8f2950c6a9d3bc5260e90da0fa7c350f5cb43a6c#balances"
        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
      >
        <h3 className="text-2xl font-bold">Burnt Liquidity &rarr;</h3>
        <p className="mt-4 text-xl">
          Devs own zero percent of supply and all liquidity from dev side is burned
        </p>
      </a>

      <a
        href="https://snowtrace.io/tx/0x8482f11704294f0f7ed38e1b57bd403ca44352dd6bea64b6a33925be4bf8d527"
        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
      >
        <h3 className="text-2xl font-bold">Ownership Renounced &rarr;</h3>
        <p className="mt-4 text-xl">
          Contract Ownership is renounced and the project is 100% community owned
        </p>
      </a>
    </div>
  )
}

export default Blurbs;