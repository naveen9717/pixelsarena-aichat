import Head from 'next/head'
import React, { ReactNode } from 'react'
import Navbar from './Navbar';

type Props = {
  children: ReactNode
  title?: string
  description?: string
  favicon?: string
}

const Layout = ({
  children,
  title = 'Pixelsarena- AI Chat',
  description = 'Human-like chatbot for information, assistance, and engagement',
  favicon = '/img/logo.png'
}: Props) => (
  <div className="font-basier-circle">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href={favicon} />
    </Head>
    <Navbar/>
    <div className="min-h-screen bg-custom">{children}</div>
  </div>
)

export default Layout
