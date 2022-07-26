import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CourseFrom from '../components/CourseFrom'
import CourseList from '../components/CourseList'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <Nav />
      <div className="flex flex-col justify-start items-center h-full">
        <CourseFrom />
        <CourseList />
      </div>
    </div>
  )
}

export default Home
