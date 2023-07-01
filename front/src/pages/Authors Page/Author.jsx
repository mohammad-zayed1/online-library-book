/* eslint-disable react/prop-types */


export const Author = (props)=>{
    return (
      <div className="items-center hover:translate-y-[-5px] transition hover:shadow-2xl  hover:border-r-2 hover:border-neutral  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
        <a href={props.link}>
          <img
            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
            src={props.image}
            alt={props.name}
          />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href={props.link}>
              {props.name}
            </a>
          </h3>
          <span className="text-gray-500 dark:text-gray-400">
            {props.job}
          </span>
          <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {props.description}
          </p>
          <div className="w-full text-right">
            <a
              className="hover:underline hover:text-primary"
              href={props.link}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}