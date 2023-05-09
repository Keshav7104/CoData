"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from "@styles/Home.module.css"
import Codata from "@Components/Parallax/codata";
import Stack from "@Components/Parallax/Stack";
import Queue from "@Components/Parallax/Queue";


const Page = ({ offset, gradient, onClick,component,msg }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin}></div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.8} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`}>Hello qorld</div>
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      {component}
      <button onClick={onClick} className="inline-block absolute bottom-5 right-2/4">{msg}</button>
    </ParallaxLayer>
  </>
)

export default function App() {
  const parallax = useRef(null)

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <section>
      <Parallax className={styles.container} ref={parallax} pages={4} horizontal>
        <Page offset={0} gradient="CoData" onClick={() => scroll(1)} component={<Codata />} msg="Touch me"/>
        <Page offset={1} gradient="Stack" onClick={() => scroll(2)} component={<Stack />} msg="Yep good"/>
        <Page offset={2} gradient="Queue" onClick={() => scroll(3)} component={<Queue />} msg="One last time"/>
        <Page offset={3} gradient="last" onClick={() => scroll(0)} component={<></>} msg="Ok we are done"/>
      </Parallax>
      <div className="h-screen"></div>
      <section className="text-10xl h-screen bg-white">Hello</section>
    </section>
  )
}
