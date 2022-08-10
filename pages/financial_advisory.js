import Head from 'next/head'
import styles from '../styles/financialservices.module.css'

const agent1 = new URL('../public/Agent1.JPG', import.meta.url)
const agent2 = new URL('../public/Agent2.jpg', import.meta.url)
const agent3 = new URL('../public/Agent3.jpg', import.meta.url)

import { MdKeyboardBackspace, MdOutlineBusinessCenter } from 'react-icons/Md'
import { FaPenSquare } from 'react-icons/Fa'

export default function financial_advisory() {
  return (
    <Head>
      <div className="container">
        <a href="/financial_services" className={styles.adviseBack}>
          <MdKeyboardBackspace size={40} />
        </a>
      </div>
      <div className="row">
        <div className="col-3 offset-2">
          <a
            href="https://wa.me/93266791?text=Hi%20there!%20I%27m%20interested%20in%20finding%20out%20more%20about%20your%20financial%20services."
            target="_blank"
            className={styles.agentCards}
            rel="noreferrer"
          >
            <div className={styles.imgwrapper}>
              <img className={styles.Agent1} src={agent1}></img>
            </div>
            <div className={styles.agentName}>
              <h1> Johnathan </h1>
            </div>
            <div className={styles.agentDescription}>
              <MdOutlineBusinessCenter size={40} /> Specialized in SME
              businesses
              <br></br>
              <br></br>
              <FaPenSquare size={40} /> Financing (Equity / Debt)
            </div>
          </a>
        </div>

        <div className="col-3">
          <a
            href="https://wa.me/93266791?text=Hi%20there!%20I%27m%20interested%20in%20finding%20out%20more%20about%20your%20financial%20services."
            target="_label"
            className={styles.agentCards}
          >
            <div className={styles.imgwrapper}>
              <img className={styles.Agent1} src={agent2}></img>
            </div>
            <div className={styles.agentName}>
              <h1> Michelle </h1>
            </div>
            <div className={styles.agentDescription}>
              <MdOutlineBusinessCenter size={40} /> Specialized in Personal
              Finance
              <br></br>
              <br></br>
              <FaPenSquare size={40} /> Investment (Stocks / Bonds)
            </div>
          </a>
        </div>

        <div className="col-3">
          <a
            href="https://wa.me/93266791?text=Hi%20there!%20I%27m%20interested%20in%20finding%20out%20more%20about%20your%20financial%20services."
            target="_label"
            className={styles.agentCards}
          >
            <div className={styles.imgwrapper}>
              <img className={styles.Agent1} src={agent3}></img>
            </div>
            <div className={styles.agentName}>
              <h1> Su-Ann </h1>
            </div>
            <div className={styles.agentDescription}>
              <MdOutlineBusinessCenter size={40} /> Specialized in Retirement
              Planning
              <br></br>
              <br></br>
              <FaPenSquare size={40} /> Budgeting / Investment
            </div>
          </a>
        </div>
      </div>
    </Head>
  )
}
