import Head from 'next/head'
import styles from '../styles/financialservices.module.css'


import {MdKeyboardBackspace, MdHealthAndSafety} from 'react-icons/Md'
import {AiFillCar, AiOutlineHome} from 'react-icons/Ai'
import {BsUmbrella} from 'react-icons/Bs'
import {RiSeedlingLine} from 'react-icons/Ri'
import {TbWheelchair} from 'react-icons/Tb'


export default function financial_advisory() {
    return (
        <Head>
                <div class = "container">
                    <a href = "/client/clientHome" className = {styles.insuranceBack}>
                        <MdKeyboardBackspace size = {40} />
                    </a>
                </div>

                <div class = "row offset-2">
                    <div class = "col">
                            <a href = "#" className = {styles.logo}>
                                <MdHealthAndSafety size = {100} />
                                <h3> Health Insurance</h3>
                            </a>
                    </div>

                    <div class = "col">
                        <a href = "#" className = {styles.logo}>
                                    <AiFillCar size = {100} />
                                    <h3> Auto Insurance</h3>
                         </a>
                    </div>
                    <div class = "col">
                            <a href = "#" className = {styles.logo}>
                                    <AiOutlineHome size = {100} />
                                    <h3> Home Insurance</h3>
                             </a>
                    </div>
                </div>

                <div class = "row offset-2">
                    <div class = "col">
                            <a href = "#" className = {styles.logo}>
                                    <BsUmbrella size = {100} />
                                    <h3> Umbrella Insurance</h3>
                             </a>
                    </div>
                    <div class = "col">
                        <a href = "#" className = {styles.logo}>
                                        <RiSeedlingLine size = {100} />
                                        <h3> Life &nbsp; Insurance</h3>
                                </a>
                    </div>
                    <div class = "col">
                            <a href = "#" className = {styles.logo}>
                                        <TbWheelchair size = {100} />
                                        <h3> Disability Insurance</h3>
                                </a>
                    </div>
                    
                 </div>


            
        </Head>

    )

}