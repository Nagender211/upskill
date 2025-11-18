
const PracticeProp = (props) => {
    const {listItem} = props;
    const {title,image,disc,className} = listItem;
    console.log(listItem)
    // const {blogData}=props;
    // const {headerText,description,className}=blogData
    // console.log(description)
  return (
   
   
     <div className={`py-4 md:py-5 px-5 flex flex-col border relative min-h-[300px] ${className}`}>
        <h3 className="text-lg md:text-xl font-medium">{title}</h3>
        <p className="text-base font-medium">{disc}</p>
        <img src={image } alt={title} className="w-[150px] h-[150px] flex !items-end absolute right-3 bottom-3 -z-10" />
    </div>
  
    
  )
}

export default PracticeProp