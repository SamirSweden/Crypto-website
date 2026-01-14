

import styles from "../Stylex.module.css"
import { Button } from "@heroui/button"




export default function Btn(){
    return(
        <>
           <Button
                size="lg"
                radius="md"
                className={styles.banner__btn}
           >
            sign up
           </Button>
        </>
    )
}
