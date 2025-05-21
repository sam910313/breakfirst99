import { Inter } from "next/font/google";
import "@/app/globals.css"
//import { Description } from "@radix-ui/react-dialog";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Todo List",
    description: "By NUU U1124051",
};

export default function TodoLayout({ children }){
    return <div className= {inter.className}>{children}</div>;
}