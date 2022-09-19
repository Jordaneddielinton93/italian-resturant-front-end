import Image from 'next/image'
import React from 'react'
import styles from "./styles.module.css"



interface IfooterProps{
  openingDaysTimes:{day:string,time:string}[]
}


export default function Footer({openingDaysTimes}: IfooterProps) {

  return (
    <footer data-testid='Footer' className={styles.container}>
        <Image src="/images/Misc/logo.png" alt="footer logo" height="48px" width="76px"/>
        <section  className={styles.container_DatesContainer}>
            <h4>Opening Times</h4>
     
            {openingDaysTimes.map(({day,time}:{day:string,time:string})=>{
              return <p key={day}>{day} --------- {time}</p>
            })}
        </section>
        <div className={styles.container_ImagesContainer}>
            <Image src={"/images/Footer/FoodImg.png"} width="55px" height="55px" alt='food_imgs'/>
            <Image src={"/images/Footer/FoodImg.png"} width="55px" height="55px" alt='food_imgs'/>
            <Image src={"/images/Footer/FoodImg.png"} width="55px" height="55px" alt='food_imgs'/>
            <Image src={"/images/Footer/FoodImg.png"} width="55px" height="55px" alt='food_imgs'/>
            <Image src={"/images/Footer/FoodImg.png"} width="55px" height="55px" alt='food_imgs'/>
            <Image src={"/images/Footer/FoodImg.png"} width="55px" height="55px" alt='food_imgs'/>
   
        </div>
        <div className={styles.container_bottomIMG}></div>
    </footer>
  )
}