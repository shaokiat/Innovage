/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/clienthomepage.module.css'
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

const nvidiaNews = new URL("../public/nvidiaNews.JPG", import.meta.url)
const coin_rock = new URL("../public/coin_rock.JPG", import.meta.url)
const accnt = new URL ("../public/accountOverview.JPG", import.meta.url)

export default function Home() {
  return (
      <Head>
        <title>Welcome to OneCiti</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
       

        <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className =  {styles.oneCiti} className ="navbar-brand ml-20" href="#">OneCiti </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className = "nav-item active">
              <a className = "nav-link text-dark" href = "#">  <h4>News</h4> </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                 <h5>Accounts</h5>
              </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="#"> Something else here </a>
            </div>
              </li>

              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                 Services
              </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="#"> Something else here </a>
            </div>
              </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0 justify-content-end" type="submit">Search</button>
    </form>
  </div>
</nav>
          <script type="text/javascript" src="Scripts/jquery-2.1.1.min.js"></script>
          <script type="text/javascript" src="Scripts/bootstrap.min.js"></script>

<div className = "row">
      <div className = "col-2 offset-1">
        <div className = "row">
          <div className = {styles.welcomeBox}>
              <h5 className ={styles.welcomeName}>Welcome Back Lucas</h5>
              <p>
                last login: 9th August 2022
              </p>
          </div>
        </div>

      <div className = "row">
          <button type="button" className="btn btn-primary btn-lg mt-4 btn-block"> Assets </button>
          </div>
              <div className = "row">
                  <button type="button" className="btn btn-primary btn-lg mt-4">Trading</button>
              </div>
              <div className = "row">
                  <button type="button" className="btn btn-primary btn-lg mt-4">Investments</button>
              </div>
              <div className = "row">
                  <button type="button" className="btn btn-primary btn-lg mt-4"> Financial Planning</button>
              </div>
          </div>

    <div className = "col-5">
        <div className = "row">
            <div className = {styles.bank_status_box}>
                <div className = {styles.accountOverview}>
                  Account Overview
                </div>
                  <div className = "row">
                    <img src = {accnt}/>
                  </div>
            </div>
        </div>
        <div className = "row">
            <div className = {styles.portfolio_box}>
              <div className = {styles.accountOverview}>
                Portfolio Performance
              </div>
            </div>
        </div>

    </div>

    <div clclassNameass = "col-3"> 
    <div className = {styles.news}>
        <h1 className = {styles.news_title}> News Feed </h1>
          <div className = "row">
              <div>
                  <img className = {styles.nvidiaNewsImage} src = {nvidiaNews}/>
              </div>
              <div>
                <h4 className = {styles.nvidiaNewsLine}> Nvidia warns of lower second-quarter revenue on gaming weakness.. </h4>
              </div>
          </div>

          <div className = "row">
              <div>
                  <img className = {styles.coinRock} src = {coin_rock}/>
              </div>
              <div>
                <h4 className = {styles.nvidiaNewsLine}> BlackRock Teams Up With Coinbase in Cryto Market.. </h4>
              </div>
          </div>

          </div>
    </div>
</div>
         </Head>
  )
}