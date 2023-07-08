import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'


function Footer() {
  return (
  <div className={styles.container}>
    <div>
         @2023 by The Art of SSR. Proudly created with Mophat
    </div>
    <div className={styles.socials}>
      <Image src="/1.png" width={30} height={30} alt="icon" className={styles.icon}/>
      <Image src="/2.png" width={30} height={30} alt="icon" className={styles.icon}/>
      <Image src="/3.png" width={30} height={30} alt="icon" className={styles.icon}/>
      <Image src="/4.png" width={30} height={30} alt="icon" className={styles.icon}/>
    </div>
  </div>
  )
}

export default Footer
