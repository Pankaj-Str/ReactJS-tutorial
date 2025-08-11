import c1 from './img/book11.png';

function Product(){

    const books = [
  {
    name: "JS Basics",
    price: 499,
    details: "Start learning JavaScript from scratch today!",
    author: "JohnDoe",
    image: c1
  },
  {
    name: "Py Crash",
    price: 599,
    details: "Fast-paced Python guide with real-world tasks.",
    author: "EricMat",
    image: "https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg"
  },
  {
    name: "React Now",
    price: 620,
    details: "Step-by-step guide to build React apps fast.",
    author: "AlexBnk",
    image: "https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg"
  },
  {
    name: "HTML CSS",
    price: 430,
    details: "Create beautiful web pages with HTML and CSS.",
    author: "JonDuck",
    image: "https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg"
  },
  {
    name: "Node JS",
    price: 520,
    details: "Backend web development using Node and APIs.",
    author: "AngeWhi",
    image: "https://m.media-amazon.com/images/I/71cU7f3gS3L.jpg"
  },
  {
    name: "ML Start",
    price: 799,
    details: "Learn machine learning using Python today.",
    author: "DavWiln",
    image: "https://m.media-amazon.com/images/I/81wcbXJZyRL.jpg"
  },
  {
    name: "MySQL DB",
    price: 480,
    details: "Master SQL queries and database management.",
    author: "LauMart",
    image: "https://m.media-amazon.com/images/I/71ffZ9mJlCL.jpg"
  },
  {
    name: "Git Pro",
    price: 300,
    details: "Master Git and GitHub for team projects.",
    author: "TomHrsn",
    image: "https://m.media-amazon.com/images/I/71XNXkK2UCL.jpg"
  }
];



    return(
        <div className="container mt-5 mb-5">
            <div className="row">
                {/* start product column  */}
                {books.map((book) => (
                <div className="col-md-3 p-3">
                    <div className="card shadow-lg border p-3 text-center border-1 border-black rounded-2">
                       <img src={book.image} className='img-fluid'></img>
                        <div className="card-boody">
                            <h3 className="card-title">{book.name}</h3>
                            <p className="card-text">{book.details}</p>
                            <p className="card-text text-primary">{book.author}</p>
                            <button className='btn btn-outline-dark'>{book.price}</button>
                        </div>

                        </div>
                </div>
                 /* end product column  */
                ))}
                </div>
            </div>
        
    );


}

export default Product;