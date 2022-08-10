// import Head from 'next/head'
// import React from 'react'


// const financialtools = () => {
//   return( 
//     <>
//       <div className="oneCiti navbar-brand ml-20" href="#">
//         OneCiti Mortgage Calculator
//       </div>
      
//     </>
  
//   )
// }

// export default financialtools

import React from 'react'
import Head from 'next/head'
import Image  from 'next/image'

import { news } from '../data/news'
import styles from "../../styles/news.module.css";

const imgStyle = {
  width: '100%',
  height: '500px',
  //backgroundImage: 'url(' + bg + ')',
  backgroundPosition: 'center 0',
  backgroundSize: '2045px 472px',
  backgroundRepeat: 'no-repeat',
}

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to OneCiti</title>
      </Head>
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
    </>
  )
}
export default Home
