import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Equalizer Landing Page</title>
      </Head>
      <div className='w-auto h-auto' id='main-div'>
        <h1 className='text-red-600'>Hello, World!</h1>
        <p>We make your music sound extraordinary. A system audio equalizer specifically designed for Android and iOS. 
          Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. 
          Control bass, mids, treble, gain control, reverb, and more! Premium EQ Get expert-level control with a robust equalizer, volume mixer, and spatial audio. 
          Take your listening experience to a whole new level and access all our incredible features! 
          $4 / month iOS Download Android Download All rights reserved © Equalizer 2021 Have any problems? 
          Contact us via social media or email us at equalizer@example.com</p>
      </div>
    </main>
  )
}
