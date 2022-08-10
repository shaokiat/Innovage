import Head from 'next/head'
import styles from '../styles/financialservices.module.css'

import { MdKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'

export default function financial_services() {
  return (
    <div>
      <Head>
        <title>Financial Services</title>
      </Head>

      <div className="container">
        <Link href="/client">
          <a className={styles.BackButton}>
            <MdKeyboardBackspace size={40} />
          </a>
        </Link>
        <div className="row">
          <Link href="/financial_advisory">
            <a className={styles.Service1}>
              <h1 className={styles.test}> Financial Advisory</h1>
            </a>
          </Link>
        </div>
        <div className="row">
          <Link href="/insurance">
            <a className={styles.Service2}>
              <h1>Insurance</h1>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
