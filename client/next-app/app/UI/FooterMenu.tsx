import Link from "next/link"

const footerLinks = [
    {
        title:"Products",
        links:[
            "Stocks & Funds",
            "Options",
            "Gold",
            "Cash Management",
            "Crypto",
        ],
    },
    {
        title:'Resources',
        links: ["Learn", "Support", "Snacks"],
    },
    {
        title:'Company',
        links:["About us", "Careers", "Affiliates", "Blog"]
    }
];



const FooterMenu = () => {
    return(
        <>
            {footerLinks.map((column) => (
                <ul key={column.title} className="flex flex-col gap-3">
                    {column.links.map((link) => (
                        <li key={link}>
                            <Link 
                                href={'/'} 
                                className="capitalize font-bold cursor-pointer text-white text-[18px]"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </>
    )
}


export default FooterMenu
