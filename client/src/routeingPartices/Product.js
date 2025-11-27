// ProductPage.jsx
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import ProductsHeader from "./ProductsHeader";

const sortByFilte = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
];

const ProductPage = () => {
  const [initialList, setIntialList] = useState([]);
  const [initprime, setIntialPrime] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [primeLoading, setPrimeLoading] = useState(false);
  const [sortOptionId, setSortOptionId] = useState(sortByFilte[0].optionId);
  const [primeman, setPrime] = useState(false);

  const jwtToken = Cookie.get("jwt_token");

  // Fetch products (with sorting)
  useEffect(() => {
    const fetchData = async () => {
      setProductsLoading(true);
      try {
        const token = Cookie.get("jwt_token");
        if (!token) {
          console.error("No JWT token found in cookies while fetching products");
          return;
        }

        const url = `https://apis.ccbp.in/products?sort_by=${sortOptionId}`;
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();

        console.log("Products response status:", response.status);
        console.log("Products data:", data);

        if (!response.ok) {
          console.error("Products API failed:", data);
          return;
        }

        const updatedData = data.products.map((item) => ({
          id: item.id,
          title: item.title,
          brand: item.brand,
          price: item.price,
          imageUrl: item.image_url,
          rating: item.rating,
        }));

        setIntialList(updatedData);
      } catch (error) {
        console.error("Network error while fetching products:", error);
      } finally {
        setProductsLoading(false);
      }
    };

    fetchData();
  }, [sortOptionId]);

  const updatedatedSort = (newSortOptionId) => {
    setSortOptionId(newSortOptionId);
  };

  // Fetch prime deals
  useEffect(() => {
    const fetchPrimeDeals = async () => {
      setPrimeLoading(true);
      try {
        const token = Cookie.get("jwt_token");
        if (!token) {
          console.error(
            "No JWT token found in cookies while fetching prime deals"
          );
          setPrime(false);
          return;
        }

        const url = "https://apis.ccbp.in/prime-deals";
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();

        console.log("Prime deals response status:", response.status);
        console.log("Prime deals data:", data);

        if (!response.ok) {
          console.error("Prime deals API failed:", data);
          setPrime(false);
          return;
        }

        const updatedData = data.prime_deals.map((item) => ({
          id: item.id,
          title: item.title,
          brand: item.brand,
          price: item.price,
          imageUrl: item.image_url,
          rating: item.rating,
        }));

        setIntialPrime(updatedData);
        setPrime(true);
      } catch (error) {
        console.error("Network error while fetching prime deals:", error);
        setPrime(false);
      } finally {
        setPrimeLoading(false);
      }
    };

    fetchPrimeDeals();
  }, []);

  if (jwtToken === undefined) {
    return <Navigate to="/auth" />;
  }

  if (productsLoading || primeLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-xl font-semibold text-slate-600">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        {/* Prime Deals Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Prime Deals
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Exclusive discounts for subscribed users.
              </p>
            </div>
            {primeman && (
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold text-amber-800">
                ⚡ Prime Active
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {primeman ? (
              initprime.map((item) => (
                <ProductsCard key={item.id} productDetails={item} />
              ))
            ) : (
              <div className="py-10 text-center w-full">
                <h1 className="text-sm md:text-base text-slate-500">
                  No prime deals available right now.
                </h1>
              </div>
            )}
          </div>
        </section>

        {/* All Products Section */}
        <section className="space-y-4">
          {/* Header + Sort */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                All Products
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {initialList.length}
                </span>{" "}
                items
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ProductsHeader
                sortOptions={sortByFilte}
                sortOptionId={sortOptionId}
                updatedatedSort={updatedatedSort}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-6">
            {initialList.length === 0 ? (
              <div className="flex h-40 items-center justify-center">
                <p className="text-sm text-slate-500">
                  No products found. Try again later.
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {initialList.map((item) => (
                  <ProductsCard key={item.id} productDetails={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
