import styles from '../../styles/clienthomepage.module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { MdAccountCircle } from 'react-icons/md'
import { FaBalanceScale, FaFantasyFlightGames } from 'react-icons/fa'
import { HiUserGroup, HiOutlineAcademicCap } from 'react-icons/hi'
import { BiCalculator, BiBot } from 'react-icons/bi'


import Link from 'next/link'


export default function Home() {
  const [username, setUsername] = useState('User')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = JSON.parse(sessionStorage.getItem('username'))
      if (name) {
        setUsername(name)
      }
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

          <div className = "row">
            <div className = "container">
              <Link href = "https://innovage.vercel.app">
                  <a className = {styles.logout}>
                        Log Out
                  </a>
                </Link>
            </div>
          </div>

      <div className="row">
        <div className={styles.header}>
          <h1 className={styles.header}>OneCiti</h1>
        </div>
      </div>

      <div className="row">
        <div className={styles.header1}>
          <h1> Welcome Back, {username}</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-3">
          <Link href="../financial_services">
            <a className={styles.categoryLogo}>
              <HiUserGroup size={120} />
            </a>
          </Link>
          <Link href="../financial_services">
            <a className={styles.categoriesHeaders}> Financial Services </a>
          </Link>
        </div>

        <div className="col-3">
          <Link href="../account_bal">
            <a className={styles.categoryLogo} target="_blank" rel="noreferrer">
              <MdAccountCircle size={120} />
            </a>
          </Link>
          <Link href="../account_bal">
            <a className={styles.categoriesHeaders}>Accounts</a>
          </Link>
        </div>

        <div className="col-3">
          <Link href="https://www.citibank.com.sg/SGGCB/JSO/username/signon/flow.action?ts=1660136063283">
            <a className={styles.categoryLogo}>
              <FaBalanceScale size={120} />
            </a>
          </Link>

          <Link href="https://www.citibank.com.sg/SGGCB/JSO/username/signon/flow.action?ts=1660136063283">
            <a
              className={styles.categoriesHeaders}
              target="_blank"
              rel="noreferrer"
            >
              Stock Exchange
            </a>
          </Link>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-3">
          <Link href="../financial_tools">
            <a className={styles.btmcategoryLogo}>
              <BiCalculator size={120} />
            </a>
          </Link>
          <Link href="../financial_tools">
            <a className={styles.btmcategoriesHeaders}>Financial Tools</a>
          </Link>
        </div>
        <div className="col-3">
          <Link href="../academy">
            <a className={styles.btmcategoryLogo}>
              <HiOutlineAcademicCap size={120} />
            </a>
          </Link>

          <Link href="../academy">
            <a className={styles.btmcategoriesHeaders}>Academy</a>
          </Link>
        </div>

        <div className="col-3">
          <Link href="https://t.me/onecity_client_bot">
            <a
              className={styles.btmcategoryLogo}
              target="_blank"
              rel="noreferrer"
            >
              <BiBot size={120} />
            </a>
          </Link>

          <Link href="https://t.me/onecity_client_bot">
            <a
              className={styles.btmcategoriesHeaders}
              target="_blank"
              rel="noreferrer"
            >
              Chatbot
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
