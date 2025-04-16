import Header from "@/app/components/header";

export default function HOME2Layout({children}){
    return(
        <div className = "z-10 min-h-dvh">
            <Header />
            {children}
        </div>
    );
}