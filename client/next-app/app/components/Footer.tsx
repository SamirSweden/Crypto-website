import { Button } from "@heroui/button";
import FooterMenu from "./UI/FooterMenu";
import { Input } from "@heroui/input";
import FooterText from "./UI/FooterText";




export default function Footer(){
    return (
        <footer className="bg-black py-[54px]  h-[100vh]">
            <div className="max-w-[1200px] p-0 mx-auto w-full h-full">
                <nav className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-9 mt-2.5">
                    <FooterMenu />
                    <p className="w-[410px] mb-[10px] h-[56px] text-[rgba(121, 133, 139, 1)] text-sm">
                        The 3-minute newsletter with fresh takes on the financial news you need to start your day.
                    </p>
                    <div className="flex items-center w-full">
                        <Input label="Email" type="email" className="w-full" />
                        <Button radius="full" color="success">subscribe</Button>
                    </div>
                    
                </nav>
             
                <div className="mt-16 mb-14 border-t border-white mt-[]"></div>
                <FooterText />
            </div>
        </footer>
    )
}


