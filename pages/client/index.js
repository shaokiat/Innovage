import Head from 'next/head'
import styles from '../../styles/clienthomepage.module.css'

import nvidiaNews from '../../public/nvidiaNews.JPG'
import coin_rock from '../../public/coin_rock.JPG'
import accnt from '../../public/accountOverview.JPG'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to OneCiti</title>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="oneCiti navbar-brand ml-20" href="#">
          OneCiti
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-dark" href="#">
                <h4>News</h4>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <h5>Accounts</h5>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <h5>Services</h5>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0 justify-content-end"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="row">
        <div className="col-2 offset-1">
          <div className="row">
            <div className={styles.welcomeBox}>
              <h5 className={styles.welcomeName}>Welcome Back Lucas</h5>
              <p>last login: 9th August 2022</p>
            </div>
          </div>

          <div className="row">
            <button
              type="button"
              className="btn btn-primary btn-lg mt-4 btn-block"
            >
              Assets
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn btn-primary btn-lg mt-4">
              Trading
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn btn-primary btn-lg mt-4">
              Investments
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn btn-primary btn-lg mt-4">
              Financial Planning
            </button>
          </div>
        </div>

        <div className="col-5">
          <div className="row">
            <div className={styles.bank_status_box}>
              <div className={styles.accountOverview}>Account Overview</div>
              <div className="row">
                <Image src={accnt} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.portfolio_box}>
              <div className={styles.accountOverview}>
                Portfolio Performance
              </div>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className={styles.news}>
            <h1 className={styles.news_title}> News Feed </h1>
            <div className="row">
              <div>
                <Image
                  className={styles.nvidiaNewsImage}
                  src={nvidiaNews}
                  alt=""
                />
              </div>
              <div>
                <h4 className={styles.nvidiaNewsLine}>
                  Nvidia warns of lower second-quarter revenue on gaming
                  weakness..
                </h4>
              </div>
            </div>

            <div className="row">
              <div>
                <Image className={styles.coinRock} src={coin_rock} alt="" />
              </div>
              <div>
                <h4 className={styles.nvidiaNewsLine}>
                  BlackRock Teams Up With Coinbase in Cryto Market..
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
