import Head from 'next/head'
import React, { ReactNode } from 'react'
import Navbar from '../../components/Navbar'

type Props = {
  children: ReactNode
  title?: string
  description?: string
  favicon?: string
}

const Privacy = ({
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
    <div className="min-h-screen bg-custom">

    <div className="container mx-auto text-white pt-2">
        <h1 className="text-2xl">Privacy Policy</h1>

        <p className="text-sm">This Privacy Policy describes how Pixelsarena Technologies ("we," "us," or "Pixelsarena Technologies") collects, uses, and shares personal information when you visit <a href="https://pixelsarena.com/">Pixelsarena Technologies</a> (the "Site").</p>

        <h3 className="text-xl">Information We Collect</h3>
        <p className="text-sm">Personal Information: We may collect your name, email address, and other contact information when you submit forms or interact with our Site.</p>
        <p className="text-sm">Usage Data: We automatically collect certain information about your device, browser, and how you interact with our Site.</p>
        <h3 className="text-xl">How We Use Information</h3>
        <h3 className="text-xl">We use the collected information to:</h3>
        <p className="text-sm">Provide and improve our services.</p>
        <p className="text-sm">Send you updates, newsletters, and promotional materials.</p>
        <p className="text-sm">Monitor and analyze usage patterns.</p>
        <p className="text-sm">Information Sharing</p>
        <p className="text-sm">We may share your information with trusted third-party service providers who assist us in operating our website and delivering services.</p>
        <h3 className="text-xl">Your Rights</h3>
        <h3 className="text-xl">You have the right to:</h3>
        <p className="text-sm">Access, update, or delete your personal information.</p>
        <p className="text-sm">Opt out of receiving marketing communications.</p>
        <p className="text-sm">Lodge a complaint with the appropriate data protection authority.</p>
        <h3 className="text-xl">Cookies</h3>
        <p className="text-sm">We use cookies and similar tracking technologies to enhance your experience on our Site.</p>
        <h3 className="text-xl">Security</h3>
        <p className="text-sm">We take reasonable measures to protect your information, but no method of transmission over the internet is 100% secure.</p>
        <h3 className="text-xl">Changes to This Policy</h3>
        <p className="text-sm">We may update this Privacy Policy from time to time. Please review this page periodically.</p>
        <h3 className="text-xl">Contact Us</h3>
        <p className="text-sm">For any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:arenapixels.com">arenapixels.com</a>.</p>
        <h3 className="text-xl">Last updated: 01 Aug 2023</h3>
        </div>
    </div>
  </div>
)

export default Privacy
