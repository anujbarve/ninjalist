import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos reprehenderit cumque dolorum esse praesentium accusamus mollitia quasi tempora ducimus? Molestiae iure quia cupiditate laboriosam quos! Labore quibusdam facilis quam ducimus.</p>
      <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, perferendis. Similique velit commodi expedita voluptatum nihil hic? In delectus aliquid dicta vel. In, rem accusantium vero est reprehenderit obcaecati quisquam?</p>
      <Link href="travels">
      <a  className={styles.btn}>See Travel Listing</a>
      </Link>
    </div>
    </>
  )
}
