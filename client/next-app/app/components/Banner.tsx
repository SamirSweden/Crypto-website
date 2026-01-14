import styles from "./Stylex.module.css"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import Btn from "./UI/Btn"


import  banner from "../assets/banner.png"

const Banner = () => {
    return(
        <>
            <section className={styles.banner} style={{marginTop:'20px'}}>
                <div className={styles.container}>
                    <div className={styles.banner__inner}>
                        <div className={styles.width}>
                            <h1 className={styles.banner__h1}>
                            Investing for Everyone
                        </h1>
                        <p className={styles.banner__p}>Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>
                            <div className="flex items-center mb-[40px]">
                                <Btn />
                            </div>
                            <div className="flex items-center gap-[12px]">
                                <Image src="/question.png" width={28} height={28}  alt="alt" />
                                <span className="text-black">Commissions & Free Stock Disclosures</span>
                            </div>
                        </div>
                            <Image 
                                src={banner}
                                width={692}
                                height={600}
                                alt="crypto app"
                            />
                    </div>
                </div>
            </section>
        </>
    )
}



export default Banner


