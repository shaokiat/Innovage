import Head from 'next/head'
import styles from '../../styles/clienthomepage.module.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { MdAccountCircle } from 'react-icons/md'
import { FaBalanceScale, FaFantasyFlightGames } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { GiNewspaper } from 'react-icons/gi'
import { BiCalculator } from 'react-icons/bi'

export default function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">OneCiti</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">News</Nav.Link>
              <Nav.Link href="http://t.me/onecity_client_bot" target="_blank">
                ChatBot
              </Nav.Link>
              <Nav.Link href="/">Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <span className={styles.header}>
        <h1>OneCiti</h1>
      </span>
      <span>
        <h1 className={styles.header}> Welcome Back, User</h1>
      </span>

      <div className="row justify-content-center">
        <div className="col-3">
          <a className={styles.categoryLogo} href="#">
            <MdAccountCircle size={120} />
          </a>
          <a className={styles.categoriesHeaders} href="#">
            My Accounts
          </a>
        </div>

        <div className="col-3">
          <a className={styles.categoryLogo} href="#">
            <FaBalanceScale size={120} />
          </a>
          <a className={styles.categoriesHeaders} href="#">
            Stock Exchange
          </a>
        </div>

        <div className="col-3">
          <a className={styles.categoryLogo} href="../financial_services">
            <HiUserGroup size={120} />
          </a>
          <a className={styles.categoriesHeaders} href="#">
            Financial Services
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <a className={styles.btmcategoryLogo} href="#">
            <GiNewspaper size={120} />
          </a>
          <a className={styles.btmcategoriesHeaders} href="#">
            Financial News
          </a>
        </div>

        <div className="col-3">
          <a className={styles.btmcategoryLogo} href="#">
            <BiCalculator size={120} />
          </a>
          <a className={styles.btmcategoriesHeaders} href="#">
            Financial Tools
          </a>
        </div>
        <div className="col-3">
          <a className={styles.btmcategoryLogo} href="#">
            <FaFantasyFlightGames size={120} />
          </a>
          <a className={styles.btmcategoriesHeaders} href="#">
            Financial Game
          </a>
        </div>
      </div>
    </div>
  )
}
