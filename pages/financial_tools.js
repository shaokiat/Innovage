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
                    <div className = "col-5 offset-1">
                        <a href = "#" className = {styles.svc1}> Tax Calculator </a>
                    </div>
                    <div className = "col">
                        <div>
                                <a href = "#" className = {styles.svc2}> Loan Calculator </a>
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-5 offset-1">
                        <a href="#" className = {styles.svc3}> Financial Goal Setting </a>
                    </div>
                    <div className = "col">
                        <div>
                                <div className = {styles.svc4}> Investment Planning </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}