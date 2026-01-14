

import styles from "./Stylex.module.css"
import Link from "next/link"
import Image from "next/image"
import superflow from "../assets/superbowl 1.png"
import { Button } from "@heroui/button"


const Investor = () => {
    return(
        <>
            <section className="bg-white py-[]">
                <div className="max-w-[1200px] mx-auto p-0 w-full h-full">
                    <div className="flex items-center justify-between">
                        <div className="left w-full ml-[-145px]">
                            <Image style={{marginLeft:'-100px'}} src={superflow} height={454} width={807} alt="photo" />
                        </div>
                        <div className="max-w-[456px] w-[456px]">
                            <h2 className="text-black text-[45px] mb-[26px]">We are all investors.</h2>
                            <div className="flex items-center">
                                <Button radius="md" color="warning">  See the campaign</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Investor 

