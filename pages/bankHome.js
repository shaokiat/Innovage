import Head from 'next/head'
import styles from '../styles/bankhomepage.module.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { RiBankFill } from 'react-icons/Ri'
import { HiUserGroup } from 'react-icons/Hi'
import { FaBalanceScale, FaMoneyBillWave } from 'react-icons/Fa'
import { TiNews } from 'react-icons/Ti'

export default function Home() {
  return (
    <Head>
      <title>Welcome to OneCiti</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      ></link>
      <div className="row">
        <div className={styles.headerNav}>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>

      <div className="row">
        <div className={styles.oneCitigrid}>
          <h2 className={styles.oneCitiHeader}> OneCiti </h2>
        </div>
        <div className="row">
          <div className={styles.welcomeGrid}>
            <h2 className={styles.welcomeHeader}> Welcome Back User</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3 offset-2">
          <a href="" className={styles.lowserviceBox}>
            <div className={styles.taskIcon}>
              <BsReverseLayoutTextSidebarReverse size={70} />
            </div>
            <div className={styles.taskNames}>Daily Tasks</div>

            <div>
              Pending Tasks : <b>2</b>
              <br />
              Upcoming Tasks : <b>3</b>
              <br />
              Upcoming Meeting : <b>1</b>
            </div>
          </a>
        </div>

        <div className="col-3">
          <a href="" className={styles.midserviceBox}>
            <div className={styles.taskIcon}>
              <RiBankFill size={70} />
            </div>
            <div className={styles.taskNames}>Bank Services</div>

            <div>
              Accounts Approval : <b>5</b>
              <br />
              Loans Review : <b>2</b>
              <br />
              Bank Statements : <b>3</b>
            </div>
          </a>
        </div>

        <div className="col-3">
          <a href="" className={styles.topserviceBox}>
            <div className={styles.taskIcon}>
              <FaBalanceScale size={70} />
            </div>
            <div className={styles.taskNames}>Stock Exchange</div>

            <div>
              New Orders : <b>7</b>
              <br />
              For Review: <b>3</b>
              <br />
              GTD Orders : <b>4</b>
            </div>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-3 offset-2">
          <a href="" className={styles.topserviceBox}>
            <div className={styles.taskIcon}>
              <HiUserGroup size={70} />
            </div>
            <div className={styles.taskNames}>Client Advisory</div>

            <div>
              Client Meeting : <b>2</b>
              <br />
              New Clients: <b>2</b>
              <br />
              Client Request : <b>3</b>
            </div>
          </a>
        </div>
        <div className="col-3">
          <a href="" className={styles.lowserviceBox}>
            <div className={styles.taskIcon}>
              <FaMoneyBillWave size={70} />
            </div>
            <div className={styles.taskNames}>Cash Services</div>

            <div>
              Wire Transfers : <b>3</b>
              <br />
              Forex Orders: <b>5</b>
              <br />
              Cash Exchange Request: <b>2</b>
            </div>
          </a>
        </div>
        <div className="col-3">
          <a href="" className={styles.midserviceBox}>
            <div className={styles.taskIcon}>
              <TiNews size={70} />
            </div>
            <div className={styles.taskNames}>Knowledge Management</div>

            <div>
              Important Updates : <b>2</b>
              <br />
              New Promotions : <b>2</b>
              <br />
              Notices : <b>8</b>
            </div>
          </a>
        </div>
      </div>
    </Head>
  )
}
