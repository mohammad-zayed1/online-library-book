import { Hero } from "./Hero-section/Hero"
import { Services } from "./Services-section/Services"
import { Authors } from "./Authors Section/Authors";
import { Quotes } from "./Quotes Section/Quotes";
import { Pricing } from "./Pricing Section/Pricing"



export const Main = ()=>{
    return (
      <>
        <Hero />
        <Services />
        <Authors />
        <Quotes/>
        <Pricing />
      </>
    );
}