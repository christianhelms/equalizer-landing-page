import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Equalizer Landing Page</title>
      </Head>
      <body className='w-auto h-auto pt-5 pr-20 pl-20 tb-5' id='main'>
        <div className=''>
          <p className='text-ibm-plex-sans font-bold text-4xl'>equalizer</p>
          <h1 className='text-ibm-plex-sans font-bold text-7xl'>We make your music sound extraordinary.</h1>
          <p>A system audio equalizer specifically designed for Android and iOS. 
            Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. 
            Control bass, mids, treble, gain control, reverb, and more! Premium EQ Get expert-level control with a robust equalizer, volume mixer, and spatial audio. 
            Take your listening experience to a whole new level and access all our incredible features! 
            $4 / month iOS Download Android Download All rights reserved © Equalizer 2021 Have any problems? 
            Contact us via social media or email us at equalizer@example.com</p>
        </div>
      </body>
    </main>
  )
}
