import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Autism
      </a>
    </footer>
  )
}

export default Footer;
