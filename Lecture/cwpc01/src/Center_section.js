import left_center from './img/center_right.png'; 
import Top_book_Section from './Top_book_Section';
function Center_section(){


    return(
        <>
        <div className="container">
            <div className="row">
                {/* left side section  */}
                <div className="col-sm-4">
                <img src={left_center} className='img-fluid'></img>
                </div>
                {/* right side section  */}
                <div className="col-sm-6">
                 <span className='fs-2'>   Joy Book <i class="bi bi-bookmark-fill"></i> Store </span>
                 <figure>
                    <blockquote class="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
               
               <div className='container'>
                    <div className='row'>
                        <Top_book_Section></Top_book_Section>
                    </div>
               </div>

                </div>
            </div>
        </div>
<hr></hr>
</>
    );

}

export default Center_section;