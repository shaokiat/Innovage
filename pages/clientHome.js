import Head from 'next/head'
import styles from '../styles/clienthomepage.module.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { MdAccountCircle } from 'react-icons/Md'
import {FaBalanceScale, FaFantasyFlightGames} from 'react-icons/Fa'
import {HiUserGroup} from 'react-icons/Hi'
import {GiNewspaper} from 'react-icons/Gi'
import {BiCalculator} from 'react-icons/Bi'


export default function Home() {
  return (
    <Head>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">OneCiti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <NavDropdown title="My Accounts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bank Accounts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Transaction History
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">View Portfolio</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Make a Transfer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="http://t.me/onecity_client_bot" target = "_blank">ChatBot</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <span className = {styles.header}>
            <h1>OneCiti</h1>
        </span>
        <span>
        <h1 className = {styles.header}> Welcome Back, User</h1>
        </span>

        <div class = "row">
                    <div class = "col-3 offset-2">
                        <a className = {styles.categoryLogo} href = "#">
                        <MdAccountCircle size = {120} />
                        </a>
                        <a className = {styles.categoriesHeaders} href = "#">
                          My Accounts
                        </a>

                      </div>
                      
                      <div class = "col-3">
                           <a className = {styles.categoryLogo} href = "#">
                               <FaBalanceScale size = {120} />
                            </a>
                            <a className = {styles.categoriesHeaders} href = "#">
                          Stock Exchange
                        </a>
                      </div>
                      
                    <div class = "col-3">
                    <a className = {styles.categoryLogo} href = "#">
                               <HiUserGroup size = {120} />
                            </a>
                            <a className = {styles.categoriesHeaders} href = "#">
                          Financial Services
                        </a>
                    </div>
            </div>
         <div class = "row">
        
                      <div class = "col-3 offset-2">
                      <a className = {styles.btmcategoryLogo} href = "#">
                               <GiNewspaper size = {120} />
                            </a>
                            <a className = {styles.btmcategoriesHeaders} href = "#">
                          Financial News
                        </a>
                      </div>
                      
                      <div class = "col-3">
                      <a className = {styles.btmcategoryLogo} href = "#">
                               <BiCalculator size = {120} />
                            </a>
                            <a className = {styles.btmcategoriesHeaders} href = "#">
                          Financial Tools
                        </a>
                        
                      </div>
                      <div class = "col-3">
                      <a className = {styles.btmcategoryLogo} href = "#">
                               <FaFantasyFlightGames size = {120} />
                            </a>
                            <a className = {styles.btmcategoriesHeaders} href = "#">
                          Financial Game
                        </a>
                      </div>
            </div>
    </Head>
  );
}
