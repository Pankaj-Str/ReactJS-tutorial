import img01 from './img/badge.png';
import img02 from './img/10-percent.png';
import img03 from './img/offer.png';
import img04 from './img/price-tag.png';
function Top_book_Section(){


    return(

        <>
            <div className="col-sm-3">
                <div className="card shadow-lg border">   
                
                    <div className='card-body'>
                        <img src={img01} className='img-fluid'></img>
                        <p className='card-text text-center'>
                            Top Books
                        </p>
                    </div>
                </div>
            </div>
             <div className="col-sm-3">
                <div className="card shadow-lg border">   
                
                    <div className='card-body'>
                        <img src={img02} className='img-fluid'></img>
                        <p className='card-text text-center'>
                            Top Books
                        </p>
                    </div>
                </div>
            </div>
             <div className="col-sm-3">
                <div className="card shadow-lg border">   
                
                    <div className='card-body'>
                        <img src={img03} className='img-fluid'></img>
                        <p className='card-text text-center'>
                            Top Books
                        </p>
                    </div>
                </div>
            </div>
             <div className="col-sm-3">
                <div className="card shadow-lg border">   
                
                    <div className='card-body'>
                        <img src={img04} className='img-fluid'></img>
                        <p className='card-text text-center'>
                            Top Books
                        </p>
                    </div>
                </div>
            </div>
        </>


    );




}

export default Top_book_Section;