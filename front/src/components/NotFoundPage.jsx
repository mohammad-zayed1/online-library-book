import {useNavigate} from 'react-router-dom';
import notFound from '../assets/img/undraw_page_not_found_re_e9o6.svg'

export const NotFoundPage = ()=>{
    const navigate = useNavigate();
    return(
        <>
          <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28 ">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src={notFound} alt="notFound" />
                <img className="hidden md:block lg:hidden" src={notFound} alt="notFound" />
                <img className="md:hidden" src={notFound} alt="notFound" />
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">Looks like you&#39;ve found the doorway to the great nothing</h1>
                <p className="py-4 text-base text-gray-800">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-base text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <button onClick={()=>{
navigate('/home')
                }} className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-[#519903] text-white hover:bg-[#519903dc] focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Go back to Homepage</button>
            </div>
        </div>
        </>
    )
}