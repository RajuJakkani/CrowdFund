import Image from 'next/image'
// import styles from './page.module.css'
import Layout from '../components/layout/Layout'
import createcampaign from './createcampaign'


export default function Home() {
  return (
    <div>
      <createcampaign />
      <Layout />
    </div>
  )
}
