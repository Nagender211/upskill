import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NxtInner = () => {
  const [intial, setIntia] = useState(null); // start as null
  const [count, setCount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const jwtToken = Cookie.get("jwt_token");
    const feteched = async () => {
      const url = `https://apis.ccbp.in/products/${id}`;
      const option = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const resp = await fetch(url, option);
      const data = await resp.json();
      console.log(data);
      if (resp.ok === true) {
        const update = {
          id: data.id,
          availability: data.availability,
          brand: data.brand,
          description: data.description,
          imageUrl: data.image_url,
          price: data.price,
          rating: data.rating,
          style: data.style,
          title: data.title,
          totalReviews: data.total_reviews,
          similarProducts: data.similar_products.map((item) => ({
            id: item.id,
            availability: item.availability,
            brand: item.brand,
            description: item.description,
            imageUrl: item.image_url,
            price: item.price,
            rating: item.rating,
            style: item.style,
            title: item.title,
            totalReviews: item.total_reviews,
          })),
        };
        setIntia(update);
      }
    };
    feteched();
  }, [id]);

  const handleDecrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back / title area (optional) */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Product Details
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Detailed view with description, reviews and similar products.
          </p>
        </div>

        {/* Main product card */}
        {intial && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-8">
            {/* Left: Image */}
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="bg-slate-100 rounded-2xl w-full max-w-md h-80 flex items-center justify-center">
                <img
                  src={intial.imageUrl}
                  alt={intial.title}
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="md:w-1/2 space-y-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  {intial.title}
                </h2>
                <p className="text-sm text-slate-500 mt-1">{intial.brand}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-slate-900">
                  ₹ {intial.price}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  ⭐ {intial.rating}
                  <span className="text-[10px] text-emerald-700/80">
                    ({intial.totalReviews} reviews)
                  </span>
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                {intial.description}
              </p>

              <div className="flex flex-wrap gap-3 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                  Style: {intial.style}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-medium ${
                    intial.availability === "In Stock"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {intial.availability}
                </span>
              </div>

              {/* Quantity and Add to cart */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-slate-700">
                    Quantity
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      className="px-4 py-2 rounded-full border border-slate-300 text-lg font-bold text-slate-700 hover:bg-slate-100"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-base font-semibold text-slate-900">
                      {count}
                    </span>
                    <button
                      className="px-4 py-2 rounded-full border border-slate-300 text-lg font-bold text-slate-700 hover:bg-slate-100"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button className="border-input bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full text-sm font-semibold shadow-sm">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Similar products */}
        {intial?.similarProducts && intial.similarProducts.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Similar Products
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {intial.similarProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  <div className="h-40 bg-slate-100 flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-contain p-3"
                    />
                  </div>
                  <div className="p-3 space-y-1">
                    <h4 className="text-sm font-semibold text-slate-900 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500">{item.brand}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-bold text-slate-900">
                        ₹ {item.price}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                        ⭐ {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <h2 className="sr-only">NxtInner</h2>
      </div>
    </div>
  );
};

export default NxtInner;
