const ProductsCard=(props)=>{
    const {productDetails}=props;
    const {id,title,brand,price,imageUrl,rating}=productDetails;
    return(
        <div>
            <img src={imageUrl} alt={title} className='w-48 h-48' />
            <h2>{title}</h2>
            <p>{brand}</p>
            <p>Rs {price}/-</p>
            <p>Rating: {rating}</p>
        </div>
    )
}
export default ProductsCard;