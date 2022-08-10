import Head from 'next/head'
import styles from '../styles/account_bal.module.css'

import { BsCalendar3 } from 'react-icons/bs'
import { FaArrowRight, FaTshirt } from 'react-icons/Fa'
import { MdOutlineFastfood } from 'react-icons/Md'
import { TbDental } from 'react-icons/Tb'
import { AiOutlineArrowDown } from 'react-icons/Ai'

const card1 = new URL('../public/card1.JPG', import.meta.url)
const card2 = new URL('../public/card2.jpg', import.meta.url)
const card3 = new URL('../public/card3.jpg', import.meta.url)

const expenses1 = new URL('../public/mtd_expenses.jpg', import.meta.url)

export default function financial_advisory() {
  return (
    <div>
      <div className={styles.Background}>
        <div className="row offset-1">
          <div className="col">
            <a href="/client/clientHome" className={styles.BankHeader}>
              OneCiti
            </a>
          </div>
          <div className="col-2">
            <a href="" className={styles.navbutton}>
              My Account
              <div className={styles.Line}> </div>
            </a>
          </div>
          <div className="col-2">
            <a href="" className={styles.navbutton}>
              Transactions
              <div className={styles.Line}> </div>
            </a>
          </div>
          <div className="col-2">
            <a href="" className={styles.navbutton}>
              Cards
              <div className={styles.Line}> </div>
            </a>
          </div>
          <div className="col">
            <a href="" className={styles.navbutton}>
              Offers
              <div className={styles.Line}> </div>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col offset-1">
            <div className={styles.mainAccount}>
              <div className={styles.mainText}>
                Main Account
                <div className={styles.Fright1}>Available Funds</div>
              </div>
              <div className={styles.mainHeader}>
                OneCiti Savings Account
                <div className={styles.Fright}>$ 68,789</div>
              </div>
              <div className={styles.mainText}>4929 0738 8688 1355</div>

              <div className={styles.mainButton}>
                Transfer money
                <div className={styles.mainButton1}>Link Accounts</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={styles.calendarBg}>
              <div className="row">
                <div className={styles.TaskHead}>
                  Upcoming payments &nbsp; &nbsp;
                  <BsCalendar3 size={40} />
                </div>

                <div className="col">
                  <div className={styles.taskLines}>Mobile Bill</div>
                  <div className={styles.textFont}>
                    <br></br>Netflix
                  </div>
                </div>

                <div className="col">
                  <div className={styles.taskLines}>$ 42.00</div>
                  <div className={styles.textFont}>
                    <br></br>$20.00
                  </div>
                </div>

                <div className="col">
                  <div className={styles.taskLines}>10th August 22</div>
                  <div className={styles.textFont}>
                    <br></br>18th August 22
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3 offset-1">
            <a href="#">
              <img className={styles.card1} src={card1}></img>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <img className={styles.card1} src={card2}></img>
            </a>
          </div>
          <div className="col-3">
            <a href="#">
              <img className={styles.card1} src={card3}></img>
            </a>
          </div>
          <div className="col-1">
            <a href="#">
              {' '}
              <FaArrowRight className={styles.rightArrow} size={40} />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-5 offset-1">
            <div className={styles.latestSpendings}>
              <h2 className={styles.latestHeader}> Latest Transactions</h2>

              <div className="row">
                <div className="col-2">
                  <div className={styles.transactionLines}>Today</div>
                </div>

                <div className="col-3">
                  <div className={styles.transactionLines}>Sunbucks ltd.</div>
                </div>

                <div className="col-3">
                  <div className={styles.transactionLines}>Card payment</div>
                </div>

                <div className="col">
                  <div className={styles.transactionLines}>- $ 15.00</div>
                </div>
                <div className="col">
                  <div className={styles.transactionLines}>
                    <MdOutlineFastfood size={30} />
                  </div>
                </div>
              </div>

              <div className={styles.Line}> </div>

              <div className="row">
                <div className="col-2">
                  <div className={styles.transactionLines1}>Today</div>
                </div>

                <div className="col-3">
                  <div className={styles.transactionLines1}>Mikee</div>
                </div>

                <div className="col-3">
                  <div className={styles.transactionLines1}>Card payment</div>
                </div>

                <div className="col">
                  <div className={styles.transactionLines1}>- $ 30.00</div>
                </div>
                <div className="col">
                  <div className={styles.transactionLines1}>
                    <FaTshirt size={30} />
                  </div>
                </div>
              </div>
              <div className={styles.Line}> </div>

              <div className="row">
                <div className="col-2">
                  <div className={styles.transactionLines1}>04.08</div>
                </div>

                <div className="col-3">
                  <div className={styles.transactionLines1}>Dental</div>
                </div>

                <div className="col-3">
                  <div className={styles.transactionLines1}>Transfer</div>
                </div>

                <div className="col">
                  <div className={styles.transactionLines1}>- $ 300.00</div>
                </div>
                <div className="col">
                  <div className={styles.transactionLines1}>
                    <TbDental size={30} />
                  </div>
                </div>
              </div>

              <div className={styles.Line}> </div>

              <div className="row">
                <div className="col-2">
                  <div className={styles.transactionLines1}>01.08</div>
                </div>

                <div className="col-3">
                  <div className={styles.transactionLines1}>McDonalds</div>
                </div>

                <div className="col-3">
                  <div className={styles.transactionLines1}>Card payment</div>
                </div>

                <div className="col">
                  <div className={styles.transactionLines1}>- $ 8.80</div>
                </div>
                <div className="col">
                  <div className={styles.transactionLines1}>
                    <MdOutlineFastfood size={30} />
                  </div>
                </div>
              </div>
              <div className="row">
                <a className={styles.SeeMore}>
                  See More <AiOutlineArrowDown size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className={styles.latestSpendingsGraph}>
              <div className={styles.latestHeader}>All Expenses</div>
              <div>
                <img className={styles.img1} src={expenses1}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
