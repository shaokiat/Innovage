import Head from 'next/head'
import styles from '../../styles/clienthomepage.module.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { MdAccountCircle } from 'react-icons/md'
import {FaBalanceScale, FaFantasyFlightGames} from 'react-icons/fa'
import {HiUserGroup,HiOutlineAcademicCap} from 'react-icons/hi'
import {BiCalculator} from 'react-icons/bi'

export default function Home() {
  return (
    <div>
<span className = {styles.header}>
            <h1>OneCiti</h1>
        </span>
        <span>
        <h1 className = {styles.header}> Welcome Back, User</h1>
        </span>

        <div class = "row">
                    <div class = "col-3 offset-2">
                        <a className = {styles.categoryLogo} href = "../account_bal">
                        <MdAccountCircle size = {120} />
                        </a>
                        <a className = {styles.categoriesHeaders} href = "../account_bal">
                          My Accounts
                        </a>

                      </div>
                      
                      <div class = "col-3">
                           <a className = {styles.categoryLogo} href = "https://www.citibank.com.sg/SGGCB/JSO/username/signon/flow.action?ts=1660136063283" target="_blank">
                               <FaBalanceScale size = {120} />
                            </a>
                            <a className = {styles.categoriesHeaders} href = "https://www.citibank.com.sg/SGGCB/JSO/username/signon/flow.action?ts=1660136063283" target="_blank">
                          Stock Exchange
                        </a>
                      </div>
                      
                    <div class = "col-3">
                    <a className = {styles.categoryLogo} href = "../financial_services">
                               <HiUserGroup size = {120} />
                            </a>
                            <a className = {styles.categoriesHeaders} href = "#">
                          Financial Services
                        </a>
                    </div>
            </div>
         <div class = "row">
        
                      <div class = "col-3 offset-2">
                      <a className = {styles.btmcategoryLogo} href = "/academy">
                               <HiOutlineAcademicCap size = {120} />
                            </a>
                            <a className = {styles.btmcategoriesHeaders} href = "/academy">
                          Academy
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
            </div>
  );
}
