import Head from 'next/head'
import styles from '../styles/academy.module.css'
import Link from 'next/link'

import {MdKeyboardBackspace} from 'react-icons/md'

export default function academy() {
  return (
    <div className = {styles.bg}>
        <Head>
             <title>Citi Academy</title>
        </Head>

      <div className="container">
            <Link href = "/client/home" >
                <a className={styles.BackButton}> <MdKeyboardBackspace size={40} /> </a>
            </Link>
        
              <div className="row">
                    <Link href="#">
                        <a className={styles.Service1} > <h1 className={styles.test}> Finance Articles</h1> </a>
                    </Link>
              </div>

              <div className="row">
                      <Link href="#">
                            <a className={styles.Service2}> <h1>Market-related News</h1> </a>
                        </Link>
                </div>

                <div className="row">
                      <Link href="#">
                            <a className={styles.Service3}> <h1>Upcoming Webinars</h1> </a>
                        </Link>
                </div>

                <div className="row">
                      <Link href="#">
                            <a className={styles.Service4}> <h1>Upcoming City Events</h1> </a>
                        </Link>
                </div>

       </div>
    </div>
  )
}
