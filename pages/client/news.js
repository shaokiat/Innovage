import React from 'react'
import Head from 'next/head'
import Image  from 'next/image'
import { Base64 } from 'js-base64'
import { news } from '../data/news'

import styles from "../../styles/news.module.css";


const imgStyle = {
  width: '100%',
  height: '600px',
  //backgroundImage: 'url(' + bg + ')',
  backgroundPosition: 'center 0',
  backgroundSize: '2045px 472px',
  backgroundRepeat: 'no-repeat',
}


const News = () => {
  return (
    <>
      <Head>
        <title>news</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      

      
      <div className={styles["container"]}>
        {
          news.map(item => <div className={styles.item} key={item.id}>
            <div className={styles["item-head"]}>
              <div className={styles.time}>{item.time}</div>
              <div className={styles.date}>{item.date}</div>
            </div>
            <Image src={item.pic} alt="" className={styles['item-img']}  height={300} width={600}/>
            <div className={styles["item-content"]}>{item.title}</div>
          </div>)
        }
        {/* <div className="row">
          <Image style={imgStyle.news1} alt="" src={nvidiaNews} />
        </div> */}
        
      </div>
    </>
  )
}

export default News