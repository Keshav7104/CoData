import styles from "@styles/Animation.module.css"

const Codata = () => {
  return (
    <div className='grid grid-cols-[30px_100px] grid-rows-[30px_100px_30px] place-items-center'>
        <div className='w-[15px] h-[15px] rounded-2xl bg-black '></div>
        <div className={styles.arrow}></div>
        <div className={styles.rot}><div className={styles.arrow}></div></div>
        <div className='w-[15px] h-[15px] rounded-2xl bg-black row-start-3 '></div>
        <div className='row-start-3'><div className={styles.arrow}></div></div>
        <span className="pt-10 transition-[transform] translate-x-28 text-7xl">oData</span>
     </div>
  )
}

export default Codata