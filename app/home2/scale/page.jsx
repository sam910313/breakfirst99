import myImg from "@/public/food04.jpg"
import Hero from "@/app/components/hero"


export default function HOME2Page({ params }){
    return <Hero imgUrl={myImg} content={"Huge Scale"}/>;
}