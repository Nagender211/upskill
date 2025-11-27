import { useState } from "react";




const ProductsHeader = (props) => {
  const {sortOptions,sortOptionId,updatedatedSort}=props;
  // const {optionId,displayText}=sortDeatis;
  // const [selectedOptionId, setSelectedOptionId] = useState([sortByFilte[0].optionId]);
  const handleSelectOptiopn=(e)=>{
    updatedatedSort(e.target.value);
  }

  return (
    <div>
      <select className="border-input" value={sortOptionId} onChange={handleSelectOptiopn}>
        {sortOptions.map(item=>(
          <option key={item.optionId} value={item.optionId}>{item.displayText}</option>
        ))}
       
      </select>
    </div>
  );
};

export default ProductsHeader;
