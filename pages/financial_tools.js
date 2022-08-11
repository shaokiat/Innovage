import Head from 'next/head'
import styles from '../styles/financialtools.module.css'

import { MdKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'


export default function financial_services() {
    return (
        <div>
            <Head>
                <title>Financial Tools</title>
            </Head>

            <div className = "container">
                <div className = "row">
                    <div className = "col">
                        <div className = {styles.leftgrid}>
                            Testing
                        </div>
                    </div>
                    <div className = "col">
                        <div>
                            Testing
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}