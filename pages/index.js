import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Equalizer Landing Page</title>
      </Head>
      {/* 1st Section */}
      <body className='pt-5' id='main'>
        <div className='flex pb-36   pl-24 pr-24'>
          <div className='pr-14'>
          <p className='text-ibm-plex-sans font-bold text-4xl pb-16'>equalizer</p>
            <h1 className='text-ibm-plex-sans font-bold text-7xl pb-10'>We make your music sound extraordinary.</h1>
            <p className='text-ibm-plex-sans font-normal text-base pr-24'>A system audio equalizer specifically designed for Android and iOS. 
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
        {/* 2nd Section */}
        <div className='p-24'>
          <div className='flex bg-almost-black rounded-xl w-full h-1/4 pl-10 pr-10 mb-24'>
            <div>
              <img
                src="/illustration-app.png"
                alt="Background pattern"
                width={600}
                height={1800}
              />
            </div>
            <div>
              <img
                src="/bg-pattern-2.svg"
                alt="Background pattern"
                width={600}
                height={1800}
              />
            </div>
            <div className='bg-lava rounded-xl p-10' id='lava-box'>
              <p className='text-almost-white'>Premium EQ</p>
              <p className='text-almost-white'>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. 
                Take your listening experience to a whole new level and access all our incredible features!</p>
              <p className='text-almost-white'>$4 /month</p>
              <Link href="#">
                <p className='text-almost-white'>iOS Downlaod</p>
              </Link>
              <Link href="#">
                <p>Android Download</p>
              </Link>
            </div>
          </div>
        </div>
        {/* 3rd Section */}
        <div className='flex pb-20 content-center items-center pl-24 pr-24'>
          <p className='pr-24 text-ibm-plex-sans font-bold text-4xl'>equalizer</p>
          <p className='text-ibm-plex-sans font-normal text-base pr-36'> All rights reserved © Equalizer 2021 Have any problems? 
            Contact us via social media or email us at <strong>equalizer@example.com</strong></p>
          <div className='flex ml-96 content-center items-center'>
            <img
                className='m-2'
                src="/icon-facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            <img
              className='m-2'
              src="/icon-instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
            <img
              className='m-2'
              src="/icon-twitter.svg"
              alt="Twitter"
              width={30}
              height={30}
            />
          </div>
        </div>
      </body>
    </main>
  )
}
