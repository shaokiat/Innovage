import Head from 'next/head'
import styles from '../styles/financialservices.module.css'
import Link from 'next/link'

import {MdKeyboardBackspace} from 'react-icons/md'

export default function academy() {
  return (
    <div>
        <Head>
          <title>Citi Academy</title>
        </Head>

      <title>Financial Services</title>
      <div className="container">
        <Link href = "/client/clientHome" >
            <a className={styles.BackButton}> <MdKeyboardBackspace size={40} /> </a>
        </Link>
        
        <div className="row">
          <Link href="/financial_advisory">
            <a className={styles.Service1} > <h1 className={styles.test}> Financial Advisory</h1> </a>
          </Link>

        </div>
        <div className="row">

        <Link href="/insurance">
            <a className={styles.Service2}> <h1>Insurance</h1> </a>
         </Link>

        </div>
      </div>
      </div>
  )
}
