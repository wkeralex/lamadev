"use client"

import Image from "next/image";
import styles from "./contact.module.css";
/* import dynamic from "next/dynamic";
import { useEffect, useState } from "react"; */

/* const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest.jsx"), {ssr: false});
 */
/* const [isClient, setIsClient] = useState(false);
useEffect(() => setIsClient(true), []);
const a = Math.random();
console.log(a); */

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

export default function ContactPage() {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
      {/* {console.log(isClient && a)} */}
        {/* { <HydrationTestNoSSR/> } */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}