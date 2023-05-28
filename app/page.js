"use client";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from "@styles/Home.module.css"
import Codata from "@Components/Parallax/codata";
import Stack from "@Components/Parallax/Stack";
import Queue from "@Components/Parallax/Queue";
import Lang from "@Components/Lang";
import Button from "@Components/Button";


const Page = ({ offset, gradient, onClick, component, msg }) => (
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


export default async function App() {
  const parallax = useRef(null)

  const getdata = async () =>{
    const res = await fetch('http://localhost:3000/api/hello')

    return res;
  }

  // const fuck = getdata();

  const scroll = (to) => {
    if (parallax.current) {
      if (to !== 0) {
        parallax.current.scrollTo(to)
      }
      else {
        const y = window.innerHeight;
        window.scrollTo(0, y);
      }
    }
  }
  return (
    <section className="page_gradient">
      <section className="h-screen bg-black">
        <Parallax className={styles.container} ref={parallax} pages={4} horizontal>
          <Page offset={0} gradient="CoData" onClick={() => scroll(1)} component={<Codata />} msg="Touch me" />
          <Page offset={1} gradient="Stack" onClick={() => scroll(2)} component={<Stack />} msg="Yep good" />
          <Page offset={2} gradient="Queue" onClick={() => scroll(3)} component={<Queue />} msg="One last time" />
          <Page offset={3} gradient="last" onClick={() => scroll(0)} component={<></>} msg="Ok we are done" />
        </Parallax>
      </section>
      <section className="flex flex-row items-center h-[500px] justify-center md:justify-around my-5 w-screen flex-wrap">
        <h1 className="text-3xl ms-8 ">We have code in all languages</h1>
       <Lang />
      </section>
      <section>
        from core to comptative
      </section>
      <section>
        from underrated to overrated
      </section>
      <section>
        We cover all domains so why are you waiting for....<br />
        {/* {fuck} */}
      </section>
      <section className="flex flex-row gap-4 p-5">
        Start your learning journey now ... 
        <Button name={"Learn"} link={"learn"}/>
      </section>
    </section>
  )
}

