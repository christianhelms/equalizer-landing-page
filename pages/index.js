import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Equalizer Landing Page</title>
      </Head>
      <body className='w-auto h-auto pt-5 pr-20 pl-20 tb-5' id='main'>
        <div className='flex'>
          <div className='pr-14'>
          <p className='text-ibm-plex-sans font-bold text-4xl pb-16'>equalizer</p>
            <h1 className='text-ibm-plex-sans font-bold text-7xl pb-10'>We make your music sound extraordinary.</h1>
            <p className='text-ibm-plex-sans font-normal text-base'>A system audio equalizer specifically designed for Android and iOS. 
              Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. 
              Control bass, mids, treble, gain control, reverb, and more!</p>
          </div>
          <div className='ml-96'>
          <img 
          id='top-right-image'
          className='absolute top-0 right-0'
          src="/bg-pattern-1.svg"
          alt="Background pattern"
          width={300}
          height={900}
          />
          </div>
        </div>
        <div>
        </div>
      </body>
    </main>
  )
}

// Premium EQ Get expert-level control with a robust equalizer, volume mixer, and spatial audio. 
// Take your listening experience to a whole new level and access all our incredible features! 
// $4 / month iOS Download Android Download All rights reserved © Equalizer 2021 Have any problems? 
// Contact us via social media or email us at equalizer@example.com
