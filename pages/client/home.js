import styles from '../../styles/clienthomepage.module.css'
import Head from 'next/head'

import { MdAccountCircle } from 'react-icons/md'
import { FaBalanceScale, FaFantasyFlightGames } from 'react-icons/fa'
import { HiUserGroup, HiOutlineAcademicCap } from 'react-icons/hi'
import { BiCalculator } from 'react-icons/bi'
import Link from 'next/link'

export default function home() {
  return (
    <div>
        <Head>
          <title>Home</title>
        </Head>
      <span className={styles.header}>
        <h1>OneCiti</h1>
      </span>
      <span>
        <h1 className={styles.header}> Welcome Back, User</h1>
      </span>

      <div className="row justify-content-center">
        <div className="col-3">
          <Link href="../account_bal">
            <a className={styles.categoryLogo}>
              <MdAccountCircle size={120} />
            </a>
          </Link>
          <Link href="../account_bal">
            <a className={styles.categoriesHeaders}>My Accounts</a>
          </Link>
        </div>

        <div className="col-3">
          <Link href="https://www.citibank.com.sg/SGGCB/JSO/username/signon/flow.action?ts=1660136063283">
            <a className={styles.categoryLogo} target="_blank" rel="noreferrer">
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

        <div className="col-3">
          <Link href="../financial_services">
            <a className={styles.categoryLogo}>
              <HiUserGroup size={120} />
            </a>
          </Link>
          <Link href="../financial_services">
            <a className={styles.categoriesHeaders}>Financial Services</a>
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
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
          <Link href="#">
            <a className={styles.btmcategoryLogo}>
              <BiCalculator size={120} />
            </a>
          </Link>
          <Link href="#">
            <a className={styles.btmcategoriesHeaders}>Financial Tools</a>
          </Link>
        </div>
        <div className="col-3">
          <Link href="#">
            <a className={styles.btmcategoryLogo}>
              <FaFantasyFlightGames size={120} />
            </a>
          </Link>
          <Link href="#">
            <a className={styles.btmcategoriesHeaders}>Financial Game</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
