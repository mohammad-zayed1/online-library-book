import { useState, useEffect } from "react";

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=art&maxResults=10"
        );
        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  console.log(books)

  const items = books.map((book)=>{
   return  <div className="card w-96 bg-base-100 shadow-xl" key={book.id}>
      <figure>
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.volumeInfo.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        {/* <p>{book.volumeInfo.description}</p>
        <p>{book.volumeInfo.authors.join(", ")}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
      </div>
    </div>;
  })
  return (
    <>
    {
       items
    }

    </>
   
  );
};

//  <div>
//    <h1>Book List</h1>
//    {books.map((book) => (
//      <div key={book.id}>
//        <h3>{book.volumeInfo.title}</h3>
//        <p>Author: {book.volumeInfo.authors.join(", ")}</p>
//        <p>Description: {book.volumeInfo.description}</p>
//        <img
//          src={book.volumeInfo.imageLinks.thumbnail}
//          alt={book.volumeInfo.title}
//        />
//      </div>
//    ))}
//  </div>;
