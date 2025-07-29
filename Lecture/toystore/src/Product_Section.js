function Product_Section(){

    // cerate a product array 
const toyStore = [
    {
        id: 1,
        name: "Teddy Bear",
        price: 499,
        info: "Soft and cuddly plush teddy bear for kids of all ages.",
        image: "https://cdn.pixabay.com/photo/2017/01/31/19/16/teddy-2025535_640.jpg"
    },
    {
        id: 2,
        name: "Remote Control Car",
        price: 899,
        info: "Fast and rechargeable RC car with LED lights.",
        image: "https://cdn.pixabay.com/photo/2020/09/13/19/55/rc-car-5567977_640.jpg"
    },
    {
        id: 3,
        name: "Building Blocks",
        price: 599,
        info: "Creative construction blocks to boost motor skills and imagination.",
        image: "https://cdn.pixabay.com/photo/2016/03/27/20/57/colorful-1284203_640.jpg"
    },
    {
        id: 4,
        name: "Doll House",
        price: 1499,
        info: "Miniature furnished doll house with dolls and accessories.",
        image: "https://5.imimg.com/data5/ANDROID/Default/2020/11/TT/CQ/KK/38999125/product-jpeg.jpg"
    },
    {
        id: 5,
        name: "Action Figure",
        price: 350,
        info: "Superhero action figure with movable joints.",
        image: "https://craftdeals.in/wp-content/uploads/2023/05/handmade-wooden-peppy-ffive-toy-colorful-vibrant-shapes.webp"
    }
];



    return(
        <>
            <div className="container">
                <div className="row">
                    {toyStore.map((toy) => (
                    <div className="col-sm-3">
                        <div class="card">
                            <img src={toy.image} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{toy.name}</h5>
                                <p class="card-text">{toy.info}</p>
                                <a href="#" class="btn btn-primary">
                                    Buy Now - ₹{toy.price}
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
                
        </>
    );




}

export default Product_Section;