import Head from 'next/head'
import React, { ReactNode } from 'react'
import Navbar from '../../components/Navbar';

type Props = {
  children: ReactNode
  title?: string
  description?: string
  favicon?: string
}

const About = ({
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

        <p className="text-base m-2">At Pixelsarena AIChat, we are at the forefront of the conversational AI revolution, committed to reshaping the way humans interact with technology. Founded on the pillars of innovation and user-centric design, we have pioneered a cutting-edge platform that seamlessly blends natural language understanding and generation capabilities.</p>

        <p className="text-base m-2">Our core mission is clear: to elevate user experiences across a multitude of industries by offering advanced AI-driven solutions. Whether it's chatbots that assist customers, virtual assistants that streamline workflows, or automated support systems that provide efficient solutions, Pixelsarena AIChat is dedicated to facilitating meaningful and intelligent conversations.</p>
        <p className="text-base m-2">Usage Data: We automatically collect certain information about your device, browser, and how you interact with our Site.</p>
        <p className="text-base m-2">Our passionate team of experts, composed of data scientists, engineers, and designers, collaborates tirelessly to advance the field of AI. We meticulously craft chatbots and virtual assistants that not only comprehend user queries but also respond with precision, empathy, and context-awareness.</p>
        <p className="text-base m-2">We understand that the future is defined by technology's ability to connect people and businesses effortlessly. That's why we have made it our mission to empower organizations to harness the full potential of AI-driven conversations for growth, customer satisfaction, and operational efficiency.</p>
        <p className="text-base m-2">With a commitment to innovation, quality, and the relentless pursuit of excellence, Pixelsarena AIChat stands as a trusted partner for businesses seeking to embrace the transformative power of intelligent automation in their interactions with customers and users. Join us on this exciting journey as we shape the future of conversations, one intelligent response at a time.</p>
        
        </div>
    </div>
  </div>
)

export default About
