import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { Link } from "react-router-dom";

const cateegoryTabs = [
  { id: 1, tabName: "Clothing" },
  { id: 2, tabName: "Electronics" },
  { id: 3, tabName: "Appliances" },
  { id: 4, tabName: "Grocery" },
  { id: 5, tabName: "Toys" },
];

const sortList = [
  {
    slectId: "PRICE_HIGH",
    displayText: "Price: High → Low",
  },
  {
    slectId: "PRICE_LOW",
    displayText: "Price: Low → High",
  },
];

const ratingList = [
  { id: 1, displayRating: "1 ★ & above" },
  { id: 2, displayRating: "2 ★ & above" },
  { id: 3, displayRating: "3 ★ & above" },
  { id: 4, displayRating: "4 ★ & above" },
  { id: 5, displayRating: "5 ★ only" },
];

const NxrTrandz = () => {
  const [initial, setInitial] = useState([]);
  const [cateInitial, setCategoryInitial] = useState(cateegoryTabs[0].id);
  const [selecteInit, setInitialSort] = useState(sortList[1].slectId);
  const [rating, setRating] = useState(ratingList[0].id);
  const [serachInput, setSerachInput] = useState("");

  const handleCat = (id) => {
    setCategoryInitial(id);
  };

  useEffect(() => {
    const feteched = async () => {
      const jwtToken = Cookie.get("jwt_token");
      const url = `https://apis.ccbp.in/products?sort_by=${selecteInit}&category=${cateInitial}&title_search=${serachInput}&rating=${rating}`;
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
        const updated = data.products.map((item) => ({
          id: item.id,
          brand: item.brand,
          imageUrl: item.image_url,
          price: item.price,
          rating: item.rating,
          title: item.title,
        }));
        setInitial(updated);
      }
    };
    feteched();
  }, [cateInitial, selecteInit, rating, serachInput]);

  const handleSort = (e) => {
    setInitialSort(e.target.value);
  };
  const handleRating = (ratingId) => {
    setRating(ratingId);
  };
  const handleInput = (e) => {
    setSerachInput(e.target.value);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            NxrTrandz Store
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Browse products, filter by category, rating, and sort by price.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0 bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-5 space-y-6">
            {/* Search */}
            <div>
              <h2 className="text-sm font-semibold text-slate-700 mb-2">
                Search
              </h2>
              <div className="relative">
                <input
                  placeholder="Search products..."
                  value={serachInput}
                  onChange={handleInput}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 text-xs">
                  🔍
                </span>
              </div>
            </div>

            {/* Category */}
            <div>
              <h2 className="text-sm font-semibold text-slate-700 mb-2">
                Category
              </h2>
              <div className="flex flex-wrap gap-2">
                {cateegoryTabs.map((item) => {
                  const isActive = item.id === cateInitial;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleCat(item.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
                        isActive
                          ? "bg-blue-500 text-white border-blue-500 shadow-sm"
                          : "bg-slate-50 text-slate-600 border-slate-300 hover:bg-white"
                      }`}
                    >
                      {item.tabName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h2 className="text-sm font-semibold text-slate-700 mb-2">
                Rating
              </h2>
              <div className="space-y-2">
                {ratingList.map((item) => {
                  const isActive = item.id === rating;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleRating(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium border transition ${
                        isActive
                          ? "bg-amber-100 border-amber-400 text-amber-800"
                          : "bg-slate-50 border-slate-300 text-slate-600 hover:bg-white"
                      }`}
                    >
                      {item.displayRating}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Top bar: sort + count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  All Products
                </h2>
                <p className="text-xs text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-slate-700">
                    {initial.length}
                  </span>{" "}
                  items
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500">
                  Sort by
                </span>
                <select
                  value={selecteInit}
                  onChange={handleSort}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  {sortList.map((item) => (
                    <option key={item.slectId} value={item.slectId}>
                      {item.displayText}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products grid */}
            {initial.length === 0 ? (
              <div className="flex h-48 items-center justify-center">
                <p className="text-sm text-slate-500">
                  No products found. Try changing filters.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {initial.map((item) => (
                  <Link
                    key={item.id}
                    to={`products/${item.id}`}
                    className="w-full max-w-xs"
                  >
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition">
                      <div className="h-44 bg-slate-100 flex items-center justify-center">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="h-full w-full object-contain p-4"
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500">{item.brand}</p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-base font-bold text-slate-900">
                            ₹ {item.price}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                            ⭐ {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default NxrTrandz;
