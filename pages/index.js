import Head from 'next/head'
import NavBar from '../components/NavBar'
import ItemSlider from '../components/ItemSlider'
import Showcase from '../components/Fullshowcase'
import SubShowcase from '../components/SubShowcase'
import Banner from '../components/Banner'
import FeaturedShowcase from '../components/FeaturedShowcase'
import BannerSecondary from '../components/BannerSecondary'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>
      <Showcase/>
      <SubShowcase/>
      <ItemSlider/>
      <Banner/>
      <FeaturedShowcase/>
      <BannerSecondary/>
    </div>
  )
}
