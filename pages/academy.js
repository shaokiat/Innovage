import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/financialservices.module.css'
<<<<<<< HEAD

import {MdKeyboardBackspace} from 'react-icons/md'
=======
import { MdKeyboardBackspace } from 'react-icons/md'
>>>>>>> 7c0cd2200140c1dace86a2058df28ffed482fc9c

export default function academy() {
  return (
    <div>
<<<<<<< HEAD
        <Head>
          <title>Citi Academy</title>
        </Head>

      <title>Financial Services</title>
=======
      <Head>
        <title>Financial Services</title>
      </Head>

>>>>>>> 7c0cd2200140c1dace86a2058df28ffed482fc9c
      <div className="container">
        <Link href="/client/clientHome">
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
<<<<<<< HEAD
      </div>
=======
    </div>
>>>>>>> 7c0cd2200140c1dace86a2058df28ffed482fc9c
  )
}
