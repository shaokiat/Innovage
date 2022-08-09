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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
       

        <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div className =  {styles.oneCiti} class ="navbar-brand ml-20" href="#">OneCiti </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class = "nav-item active">
              <a class = "nav-link text-dark" href = "#">  <h4>News</h4> </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                 <h5>Accounts</h5>
              </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
             <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
               <a class="dropdown-item" href="#"> Something else here </a>
            </div>
              </li>

              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                 Services
              </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
             <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
               <a class="dropdown-item" href="#"> Something else here </a>
            </div>
              </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0 justify-content-end" type="submit">Search</button>
    </form>
  </div>
</nav>
          <script type="text/javascript" src="Scripts/jquery-2.1.1.min.js"></script>
          <script type="text/javascript" src="Scripts/bootstrap.min.js"></script>

<div class = "row">
      <div class = "col-2 offset-1">
        <div class = "row">
          <div className = {styles.welcomeBox}>
              <h5 className ={styles.welcomeName}>Welcome Back Lucas</h5>
              <p>
                last login: 9th August 2022
              </p>
          </div>
        </div>

      <div class = "row">
          <button type="button" class="btn btn-primary btn-lg mt-4 btn-block"> Assets </button>
          </div>
              <div class = "row">
                  <button type="button" class="btn btn-primary btn-lg mt-4">Trading</button>
              </div>
              <div class = "row">
                  <button type="button" class="btn btn-primary btn-lg mt-4">Investments</button>
              </div>
              <div class = "row">
                  <button type="button" class="btn btn-primary btn-lg mt-4"> Financial Planning</button>
              </div>
          </div>

    <div class = "col-5">
        <div class = "row">
            <div className = {styles.bank_status_box}>
                <div className = {styles.accountOverview}>
                  Account Overview
                </div>
                  <div class = "row">
                    <img src = {accnt}/>
                  </div>
            </div>
        </div>
        <div class = "row">
            <div className = {styles.portfolio_box}>
              <div className = {styles.accountOverview}>
                Portfolio Performance
              </div>
            </div>
        </div>

    </div>

    <div class = "col-3"> 
    <div className = {styles.news}>
        <h1 className = {styles.news_title}> News Feed </h1>
          <div class = "row">
              <div>
                  <img className = {styles.nvidiaNewsImage} src = {nvidiaNews}/>
              </div>
              <div>
                <h4 className = {styles.nvidiaNewsLine}> Nvidia warns of lower second-quarter revenue on gaming weakness.. </h4>
              </div>
          </div>

          <div class = "row">
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
