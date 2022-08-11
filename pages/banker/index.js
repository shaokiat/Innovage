import Head from 'next/head'
import styles from '../../styles/bankhomepage.module.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { RiBankFill } from 'react-icons/ri'
import { HiUserGroup } from 'react-icons/hi'
import { FaBalanceScale, FaMoneyBillWave } from 'react-icons/fa'
import { TiNews } from 'react-icons/ti'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to OneCiti</title>
      </Head>

      <div>
        <div className="row">
          <div className={styles.header}>OneCiti</div>
        </div>

        <div classNameName="row">
          <div classNameName="col">
            <div classNameName="row">
              <div classNameName="col-4">
                <a href="#" className={styles.box1}>
                  <div>
                    <BsReverseLayoutTextSidebarReverse size={100} />
                  </div>
                  <div className={styles.logoHeader1}> Daily Tasks </div>
                </a>
              </div>

              <div classNameName="col-4">
                <a href="#" className={styles.box1}>
                  <div>
                    <RiBankFill size={100} />
                  </div>
                  <div className={styles.logoHeader1}> Bank Services </div>
                </a>
              </div>
            </div>

<<<<<<< HEAD
                <div className = "row">
                      <div className = "col">
                            <div className = "row">
                                  <div className = "col-2">
                                              <a href = "#" className = {styles.box1}>
                                                    <div> <BsReverseLayoutTextSidebarReverse size={100} />  </div>
                                                    <div className = {styles.logoHeader1}> Daily Tasks </div>
                                              </a>
                                  </div>

                                  <div className = "col-2">
                                      <a href = "#" className = {styles.box1}>
                                            <div> <RiBankFill size={100} /> </div>
                                            <div className = {styles.logoHeader1}> Bank Services </div>
                                        </a>

                                  </div>
                            </div>

                            <div className = "row">
                                <div className = "col-2">
                                      <a href = "#" className = {styles.box1}>
                                            <div> <HiUserGroup size={100} /> </div>
                                            <div className = {styles.logoHeader1}> Clients</div>
                                        </a>
                                </div>
                                <div className = "col-2">
                                        <a href = "#" className = {styles.box1}>
                                              <div> <TiNews size={100} /> </div>
                                              <div className = {styles.logoHeader1}> Knowledge Management </div>
                                        </a>
                                </div>
                            </div>
                      </div>

                      <div className = "col">
                          <div className = {styles.glancebg}>
                                <div className = "row">
                                      <div className = {styles.newsHeader}>
                                        At A Glance
                                      </div>
                                </div>
                                <div className = "row">
                                      <a href = "#" className = {styles.article1}>
                                      <BsReverseLayoutTextSidebarReverse size={50} /> Daily Tasks 
                                        <div className = {styles.articleBody1}>
                                          <br></br>
                                              <li>Approve accounts for Jenny, George and Cynthia</li>
                                              <li>Due : Today </li>
                                        </div>
                                      </a>

                                      <a href = "#" className = {styles.article2}>
                                        <HiUserGroup size={50} /> Clients 
                                        <div className = {styles.articleBody1}>
                                          <br></br>
                                              <li>Client Meeting with Jessica</li>
                                              <li>Due : Today 14:00</li>
                                        </div>
                                      </a>

                                      <a href = "#" className = {styles.article3}>
                                        <TiNews size={50} /> Daily Tasks 
                                        <div className = {styles.articleBody1}>
                                          <br></br>
                                              <li>Check and complete accounts for Donuts.co</li>
                                              <li>Due : 14 August 2022</li>
                                        </div>
                                      </a>

                                      <a href = "#" className = {styles.article4}>
                                        <TiNews size={50} /> Knowledge Management
                                        <div className = {styles.articleBody1}>
                                          <br></br>
                                              <li>New City Promotion : 5% cashback for new cardholders</li>
                                              <li>Due : 31 August 2022</li>
                                        </div>
                                      </a>
                                </div>

                        
                          </div>
                      </div>
                </div>
=======
            <div classNameName="row">
              <div classNameName="col-4">
                <a href="#" className={styles.box1}>
                  <div>
                    <HiUserGroup size={100} />
                  </div>
                  <div className={styles.logoHeader1}> Clients</div>
                </a>
              </div>
              <div classNameName="col-4">
                <a href="#" className={styles.box1}>
                  <div>
                    <TiNews size={100} />
                  </div>
                  <div className={styles.logoHeader1}>Knowledge Management</div>
                </a>
              </div>
>>>>>>> b7df4c736e8810ddf03831f7f3561156244769a5
            </div>
          </div>

          <div classNameName="col">
            <div className={styles.glancebg}>
              <div classNameName="row">
                <div className={styles.newsHeader}>At A Glance</div>
              </div>
              <div classNameName="row">
                <a href="#" className={styles.article1}>
                  <BsReverseLayoutTextSidebarReverse size={50} /> Daily Tasks
                  <div className={styles.articleBody1}>
                    <br></br>
                    <li>Approve accounts for Jenny, George and Cynthia</li>
                    <li>Due : Today </li>
                  </div>
                </a>

                <a href="#" className={styles.article2}>
                  <HiUserGroup size={50} /> Clients
                  <div className={styles.articleBody1}>
                    <br></br>
                    <li>Client Meeting with Jessica</li>
                    <li>Due : Today 14:00</li>
                  </div>
                </a>

                <a href="#" className={styles.article3}>
                  <TiNews size={50} /> Daily Tasks
                  <div className={styles.articleBody1}>
                    <br></br>
                    <li>Check and complete accounts for Donuts.co</li>
                    <li>Due : 14 August 2022</li>
                  </div>
                </a>

                <a href="#" className={styles.article4}>
                  <TiNews size={50} /> Knowledge Management
                  <div className={styles.articleBody1}>
                    <br></br>
                    <li>
                      New City Promotion : 5% cashback for new cardholders
                    </li>
                    <li>Due : 31 August 2022</li>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
