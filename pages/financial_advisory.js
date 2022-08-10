import styles from '../styles/financialservices.module.css'
import Link from 'next/link'

import { MdKeyboardBackspace, MdOutlineBusinessCenter } from 'react-icons/md'
import { FaPenSquare } from 'react-icons/fa'

const data = [
  {
    name: 'Jonathan',
    specialization: 'Specialized in SME businesses',
    department: 'Financing (Equity / Debt)',
    image: new URL('../public/Agent1.jpg', import.meta.url),
  },
  {
    name: 'Michelle',
    specialization: 'Specialized in Personal Finance',
    department: 'Investment (Stocks / Bonds)',
    image: new URL('../public/Agent2.jpg', import.meta.url),
  },
  {
    name: 'Su-Ann',
    specialization: 'Specialized in Retirement Planning',
    department: 'Budgeting / Investment',
    image: new URL('../public/Agent3.jpg', import.meta.url),
  },
  {
    name: 'Su-Ann',
    specialization: 'Specialized in Retirement Planning',
    department: 'Budgeting / Investment',
    image: new URL('../public/Agent3.jpg', import.meta.url),
  },
  {
    name: 'Su-Ann',
    specialization: 'Specialized in Retirement Planning',
    department: 'Budgeting / Investment',
    image: new URL('../public/Agent3.jpg', import.meta.url),
  },
]

export default function financial_advisory() {
  return (
    <div>
      <div className="container">
        <Link href="/financial_services">
          <a className={styles.adviseBack}>
            <MdKeyboardBackspace size={30} />
          </a>
        </Link>
      </div>
      <div className="d-flex justify-content-center align-content-center">
        <div className="row justify-content-center d-flex flex-wrap w-75">
          {data.map((banker) => (
            <div className="col-4" key={banker._id}>
              <Link href="#">
                <a className={styles.agentCards} rel="noreferrer">
                  <div className={styles.imgwrapper}>
                    <img className={styles.Agent1} src={banker.image}></img>
                  </div>
                  <div className={styles.agentName}>
                    <h1>{banker.name}</h1>
                  </div>
                  <div className={styles.agentDescription}>
                    <MdOutlineBusinessCenter size={40} />{' '}
                    {banker.specialization}
                    <br></br>
                    <br></br>
                    <FaPenSquare size={40} />
                    {banker.department}
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
