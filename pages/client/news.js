/* eslint-disable jsx-a11y/alt-text */



import React from 'react'
import Head from 'next/head'
import Image  from 'next/image'


import { news } from '../data/news'
import styles from "../../styles/news.module.css";

const imgStyle = {
  width: '100%',
  height: '500px',
  // backgroundImage: 'url(' + bg + ')',
  backgroundPosition: 'center 0',
  backgroundSize: '2045px 472px',
  backgroundRepeat: 'no-repeat',
}

const Home = () => {
  return (
    <>
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
      <div className={styles["container"]}>
        {
          news.map(item => <div className={styles.item} key={item.id}>
            <div className={styles["item-head"]}>
              <div className={styles.time}>{item.time}</div>
              <div className={styles.date}>{item.date}</div>
            </div>
            
            <Image src={item.pic} alt="" className={styles['item-img']}  height={200} width={300}/>
            <div className={styles["item-content"]}>{item.title}</div>
          </div>)
        }
        {/* <div className="row">
          <Image style={imgStyle.news1} alt="" src={nvidiaNews} />
        </div> */}
      </div>
      <div style={{borderRadius: '500px', overflow: 'hidden'}}>
        <Image src="/1.jpg" layout="fill" objectFit="cover" />
      </div>
    </>
  )
}
export default Home




