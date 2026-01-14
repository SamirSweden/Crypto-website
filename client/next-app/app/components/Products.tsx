
import Link from "next/link";
import styles from "./Stylex.module.css"
import Image from "next/image";

const linksCrypto = [
    {   
        id:1,
        label: 'Stocks',
        href:'/'
    },
    {
        id:2,
        label: 'Options',
        href:'/'
    },
    {
        id:3,
        label: 'Gold',
        href:'/'
    },
    {
        id:4,
        label: 'Crypto',
        href:'/'
    },
];


const Product = () => {
    return(
        <section className={styles.product} style={{
            background: 'rgba(240, 235, 230, 1)'
        }}>
            <div className="max-w-[1250px] mx-auto py-0 px-15 w-full h-full ">
                <div className="flex items-center justify-between h-full">
                    <div>
                        <h3 className={styles.product__h3}>Our Products</h3>
                        <ul className="flex items-center gap-[30px] mb-[70px]">
                            <h4 className="text-black capitalize" style={{fontSize:'17px'}}>Cash Management</h4>
                            {linksCrypto.map(({ id,  label , href }) => (
                                <li key={id}>
                                    <Link className={styles.product__link} href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>   
                        <div className="product__text mb-[122px]">
                            <p className={styles.product__p}>Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</p>
                            <button className={styles.product__btn}>learn more</button>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <img src="/question.png" alt="photo"  width={28} height={28} />
                            <p className="text-[17px] font-bold text-gray-400">Variable APY and Debit Card Disclosures</p>
                        </div>
                    </div>
                    <div>
                        <Image className="ml-[-100px] mb-[126px]" src={'/product.png'} width={585} height={585} alt="crypto app" />
                        <span className="text-black text-sm">Cash Management offered through Robinhood Financial</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product
