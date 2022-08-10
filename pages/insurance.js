import styles from '../styles/financialservices.module.css'

import { mdkeyboardbackspace, mdhealthandsafety } from 'react-icons/md'
import { aiFillCar, aioutlinehome } from 'react-icons/ai'
import { bsumbrella } from 'react-icons/bs'
import { riseedlingline } from 'react-icons/ri'
import { tbwheelchair } from 'react-icons/tb'
import Link from 'next/link'

export default function financial_advisory() {
  return (
    <div>
      <div className="container">
        <Link href="/financial_services">
          <a className={styles.insuranceBack}>
            <MdKeyboardBackspace size={40} />
          </a>
        </Link>
      </div>

      <div className="row offset-2">
        <div className="col">
          <Link href="#">
            <a className={styles.logo}>
              <MdHealthAndSafety size={100} />
              <h3> Health Insurance</h3>
            </a>
          </Link>
        </div>

        <div className="col">
          <Link href="#">
            <a className={styles.logo}>
              <AiFillCar size={100} />
              <h3> Auto Insurance</h3>
            </a>
          </Link>
        </div>
        <div className="col">
          <Link href="#">
            <a className={styles.logo}>
              <AiOutlineHome size={100} />
              <h3> Home Insurance</h3>
            </a>
          </Link>
        </div>
      </div>

      <div className="row offset-2">
        <div className="col">
          <Link href="#">
            <a className={styles.logo}>
              <BsUmbrella size={100} />
              <h3> Umbrella Insurance</h3>
            </a>
          </Link>
        </div>
        <div className="col">
          <Link href="#">
            <a className={styles.logo}>
              <RiSeedlingLine size={100} />
              <h3> Life &nbsp; Insurance</h3>
            </a>
          </Link>
        </div>
        <div className="col">
          <Link href="#">
            <a className={styles.logo}>
              <TbWheelchair size={100} />
              <h3> Disability Insurance</h3>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
