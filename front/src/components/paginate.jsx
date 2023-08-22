// import  { useState, useMemo } from 'react';
// import Pagination from './Pagination';
// // import data from './data.json';
// import './pagination.css';

// let PageSize = 4;

// export default function Paginate() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const currentTableData = useMemo(() => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;
//     return data.slice(firstPageIndex, lastPageIndex);
//   }, [currentPage]);

//   return (
//     <div className='grow mt-10 p-5 flex flex-col items-center'>
//      <div className='grow grid grid-cols-4 grid-rows-2 gap-2 relative'>

//           {currentTableData.map((item , index) => {
//             return (
             
//               <div key={index} className="card w-96 bg-base-100 shadow-xl ">
//               <div className="card-body">
//                 <h2 className="card-title">{item.id}</h2>
//                 <p>{item.first_name}</p>
//                 <p>{item.last_name}</p>
//                 <p>{item.email}</p>
//                 <p>{item.phone}</p>
                
//               </div>
//             </div>
//             );
//           })}
//      </div>
       
//       <Pagination
//         className="pagination-bar mt-5"
//         currentPage={currentPage}
//         totalCount={data.length}
//         pageSize={PageSize}
//         onPageChange={page => setCurrentPage(page)}
//       />
//     </div>
//   );
// }
