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
          <div class = "row">
              <div className = {styles.header}>
                  OneCiti-P
              </div>
            </div>

            <div class = "row">
                <div class = "col">
                    <div className = {styles.box1}>
                        <div>
                        <BsReverseLayoutTextSidebarReverse size={100} />
                        </div>
                    </div>


                </div>

                <div class = "col">
                  Col 2
                </div>

                <div class = "col">
                  Col 3
                </div>
            </div>

            
      </div>



    </>
  )
}
