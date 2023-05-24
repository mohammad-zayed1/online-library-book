import { Author } from "./Author";

import Data from './authors.json'
import { NavbarLanding } from "../../components/NavbarLanding";
import { Footer } from "../../components/Footer";

export const AuthorsPage= ()=>{

    const Authors = Data.map((author , index)=>{
        return <Author key={index} name={author.name} image={author.image} job={author.job}  description={author.description} link={author.link}/>;
    });

    return (
        <>
        <NavbarLanding/>
      <section className="bg-white background-cover-img" id="authors">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Best Authors
            </h2>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {Authors}
          </div>
        </div>
      </section>
      <Footer/>
        </>
    );
    
}