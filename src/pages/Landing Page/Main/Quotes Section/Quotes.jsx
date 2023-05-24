
import { useState , useEffect } from "react";

export const Quotes = ()=>{
   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

 const quotes = [
   "The only way to do great work is to love what you do. - Steve Jobs",
   "In the middle of difficulty lies opportunity. - Albert Einstein",
   "Believe you can and you're halfway there. - Theodore Roosevelt",
   "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
   "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
   "The best way to predict the future is to create it. - Peter Drucker",
   "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
   "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
   "The harder I work, the luckier I get. - Gary Player",
   "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
 ];

   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentQuoteIndex((prevIndex) =>
         prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
       );
     }, 8000); // Adjust the time interval (in milliseconds) as desired

     return () => clearInterval(interval);
   }, [quotes.length]);

   
    return (
      <div className="bg-neutral py-[60px]" id="quotes">
        <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-white ">
          Some Quotes For You
        </h2>
        <blockquote className="text-xl rounded-lg bg-[#ffffff63] italic font-semibold text-gray-900 dark:text-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center">
          <p className="text-white">
            &#34;{quotes[currentQuoteIndex]}&#34;
          </p>
        </blockquote>
      </div>
    );
}