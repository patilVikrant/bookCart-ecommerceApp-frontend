import { Link } from "react-router-dom";
import useBookContext from "../contexts/BookContext";
import { useState } from "react";

const ProductListing = () => {
  const {
    books,
    cartItems,
    addToCart,
    wishlistItems,
    toggleWishlistItems,
    searchQuery,
    setSearchQuery,
    setSearchText,
  } = useBookContext();
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [priceRange, setPriceRange] = useState("");
  const [itemCategory, setItemCategory] = useState([]);
  const [itemRating, setItemRating] = useState("");

  // console.log(books);
  // console.log(books && books.map((book) => book.category));

  // console.log(wishlistItems);

  const priceChangeHandler = (event) => {
    setPriceRange(event.target.value);
  };
  // console.log(priceRange);
  const categories = [
    "Business",
    "Finance",
    "Programming",
    "Sci-Fi",
    "Self-Help",
    "Science",
  ];

  const categoryChangeHandler = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setItemCategory((prevValue) => [...prevValue, value]);
    } else {
      setItemCategory((prevValue) =>
        prevValue.filter((category) => category != value),
      );
    }
  };

  // console.log(itemRating);

  const ratingChangeHandler = (event) => {
    setItemRating(event.target.value);
  };

  const resetFilters = () => {
    setPriceRange("");
    setItemCategory([]);
    setItemRating("");
  };

  const filteredBooks = books
    ? priceRange || itemCategory.length !== 0 || itemRating
      ? books.filter((book) => {
          const bookPrice = priceRange ? book.price < Number(priceRange) : true;

          const bookCategory =
            itemCategory.length !== 0
              ? itemCategory.includes(book.category)
              : true;

          const bookRating = itemRating
            ? book.rating >= Number(itemRating)
            : true;

          return bookPrice && bookCategory && bookRating;
        })
      : books
    : [];
  // console.log(filteredBooks);

  const showAllBooks = () => {
    setSearchQuery("");
    setSearchText("");
    resetFilters();
  };

  const imageHeight = filterDisplay ? "290px" : "240px";

  return (
    <div className="bg-body-tertiary py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="mb-0">All Books</h1>

          <button
            className="btn btn-outline-primary"
            onClick={() => setFilterDisplay(!filterDisplay)}
          >
            {filterDisplay ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {searchQuery && (
          <button onClick={showAllBooks} className="btn btn-primary mb-3">
            Show All books
          </button>
        )}

        <div className="row">
          {/* Toggleable Filters Sidebar */}
          {filterDisplay && (
            <div className="col-lg-3 mb-4">
              <div className="sticky-top" style={{ top: "20px" }}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">Filters</h5>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={resetFilters}
                      >
                        Reset
                      </button>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-4">
                      <label className="form-label">Price</label>
                      <input
                        type="range"
                        className="form-range"
                        min="100"
                        max="2000"
                        value={priceRange}
                        onChange={priceChangeHandler}
                      />
                      <small className="text-muted">
                        Up to ₹{priceRange || 2000}
                      </small>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-4">
                      <h6>Category</h6>
                      {categories.map((cat) => (
                        <div className="form-check" key={cat}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`${cat}-category`}
                            value={cat}
                            checked={itemCategory.includes(cat)}
                            onChange={categoryChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`${cat}-category`}
                          >
                            {cat}
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Rating Filter */}
                    <div>
                      <h6>Rating</h6>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="rating"
                          value="4"
                          checked={itemRating === "4"}
                          onChange={ratingChangeHandler}
                        />
                        <label className="form-check-label">
                          4 stars & above
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="rating"
                          value="3"
                          checked={itemRating === "3"}
                          onChange={ratingChangeHandler}
                        />
                        <label className="form-check-label">
                          3 stars & above
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="rating"
                          value="2"
                          checked={itemRating === "2"}
                          onChange={ratingChangeHandler}
                        />
                        <label className="form-check-label">
                          2 stars & above
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Books Section */}
          <div className={filterDisplay ? "col-lg-9" : "col-12"}>
            <div className="row g-4 pb-5 mb-5">
              {books ? (
                filteredBooks.length !== 0 ? (
                  filteredBooks.map((book) => (
                    <div
                      key={book._id}
                      className="col-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <div className="card h-100 shadow-sm rounded-3 overflow-hidden border-0">
                        <div
                          className="position-relative bg-white"
                          style={{
                            height: imageHeight,
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={book.image}
                            className="card-img-top"
                            alt="book-cover-page"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center top",
                            }}
                          />
                          <span
                            className="badge rounded-pill text-bg-light py-2 position-absolute top-0 end-0 m-3"
                            onClick={() => toggleWishlistItems(book._id)}
                            role="button"
                            style={{ cursor: "pointer", zIndex: 10 }}
                          >
                            {wishlistItems.find((item) => item._id == book._id)
                              ? "❤"
                              : "🤍"}
                          </span>
                        </div>

                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{book.title}</h5>
                          <p className="card-text mb-1">
                            <strong>Author:</strong> {book.author}
                          </p>
                          <p className="card-text mb-1">
                            <strong>Rating:</strong> {book.rating}
                          </p>
                          <p className="card-text mb-3">
                            <strong>Price:</strong> INR {book.price}
                          </p>

                          <div className="mt-auto">
                            <Link
                              to={`/books/${book._id}`}
                              className="btn btn-primary w-100 mb-2"
                            >
                              Details
                            </Link>
                            <button
                              className="btn btn-outline-secondary w-100"
                              onClick={() => addToCart(book)}
                              disabled={cartItems.some(
                                (item) => item._id == book._id,
                              )}
                            >
                              {cartItems.some((item) => item._id == book._id)
                                ? "Added to Cart"
                                : "Add to Cart"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h4>No books found matching your filters</h4>
                  </div>
                )
              ) : (
                <div className="col-12 text-center py-5">
                  <p>Loading...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
