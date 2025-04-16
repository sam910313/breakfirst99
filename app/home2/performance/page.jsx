import myImg from "@/public/food02.jpg"
import Hero from "@/app/components/hero"


export default function HOME2Page({ params }){
    return <Hero imgUrl={myImg} content={"High Performance"}/>;
}