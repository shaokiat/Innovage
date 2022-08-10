import Head from 'next/head'
import styles from '../styles/financialservices.module.css'


import {MdKeyboardBackspace} from 'react-icons/md'

export default function financial_services() {
    return (
        <Head>
                <title>Financial Services</title>
                <div class = "container">
                    <a href = "/client/clientHome" className = {styles.BackButton}>
                    <MdKeyboardBackspace size = {40} />
                    </a>
                    <div class = "row">
                        <a className = {styles.Service1} href = "/financial_advisory">
                            <h1 className = {styles.test}> Financial Advisory</h1>
                        </a>
                    </div>
                    <div class = "row">
                    <a className = {styles.Service2} href = "/insurance">
                            <h1>Insurance</h1>
                        </a>
                    </div>
                </div>

        </Head>

    ) 
    }