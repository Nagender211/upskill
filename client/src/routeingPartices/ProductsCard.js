// ProductsCard.jsx
import { Link } from "react-router-dom";

const ProductsCard = (props) => {
  const { productDetails } = props;
  const { id, title, brand, price, imageUrl, rating } = productDetails;

  return (
    <Link
      to={`/products/${id}`}
      className="w-full max-w-xs hover:no-underline"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-transform">
        {/* Image */}
        <div className="h-44 bg-slate-100 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain p-4"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h2 className="text-sm font-semibold text-slate-900 line-clamp-2">
            {title}
          </h2>
          <p className="text-xs text-slate-500">{brand}</p>

          <div className="flex items-center justify-between pt-2">
            <p className="text-base font-bold text-slate-900">
              Rs {price}/-
            </p>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
              ⭐ {rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
