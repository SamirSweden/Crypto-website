import Link from "next/link"
import styles from "./Stylex.module.css"

const Title = () => {
    return(
        <>
        <div className={styles.title}>
            <div className="max-w-[1200px] mx-auto p-0 w-full h-full">
                <div className="flex items-center justify-center">
                    <h4 className="text-[#111] text-lg font-light">
                        See our <Link href={'/'} className="text-bold! text-black cursor-pointer text-lg" style={{textDecoration:'underline'}}>fee schedule</Link> to learn more about cost.
                    </h4>
                </div>
            </div>
        </div>
        </>
    )
}


export default Title
