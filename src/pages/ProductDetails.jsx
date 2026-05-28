import { useParams, Link, useNavigate } from "react-router-dom";
import useBookContext from "../contexts/BookContext";

const ProductDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const {
    books,
    loading,
    cartItems,
    setCartItems,
    addToCart,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    wishlistItems,
    toggleWishlistItems,
  } = useBookContext();

  const navigate = useNavigate();

  const requiredBook = books && books.find((book) => book._id == id);
  //   console.log(requiredBook);
  const isAddedToCart = cartItems && cartItems.find((book) => book._id == id);
  const isBookAddedToWishlist =
    wishlistItems && wishlistItems.find((book) => book._id == id);

  const handleBuyNow = async () => {
    cartItems.forEach((item) => removeItemFromCart(item._id, true));
    await addToCart(requiredBook._id, true);
    setCartItems([{ ...requiredBook, quantity: 1 }]);
    navigate("/cart");
  };

  return (
    <div className="bg-body-tertiary py-2 pb-5">
      <div className="container pb-5">
        {loading && <p>Loading...</p>}
        {requiredBook && (
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="row g-4">
              <div className="col-12 col-lg-5">
                <div style={{ width: "260px", margin: "0 auto" }}>
                  <div className="position-relative mb-3">
                    <img
                      src={requiredBook.image}
                      alt={requiredBook.title}
                      className="w-100 rounded-3"
                    />

                    <span
                      className="badge rounded-pill text-bg-light py-2 position-absolute"
                      style={{
                        top: "10px",
                        right: "10px",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                      }}
                      onClick={() => toggleWishlistItems(requiredBook._id)}
                      role="button"
                    >
                      {isBookAddedToWishlist ? "❤" : "🤍"}
                    </span>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary w-100 my-2"
                      onClick={handleBuyNow}
                    >
                      Buy Now
                    </button>

                    {isAddedToCart ? (
                      <Link to="/cart" className="btn btn-secondary w-100">
                        Item in cart
                      </Link>
                    ) : (
                      <button
                        className="btn btn-secondary w-100"
                        onClick={() => addToCart(requiredBook._id)}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <h2 className="mb-3">{requiredBook.title}</h2>

                <p>
                  Rating:{" "}
                  <span className="fw-semibold">{requiredBook.rating}</span>
                </p>
                <p>
                  Author:{" "}
                  <span className="fw-semibold">{requiredBook.author}</span>
                </p>
                <p>
                  Category:{" "}
                  <span className="fw-semibold">{requiredBook.category}</span>
                </p>
                <p>
                  Publication House:{" "}
                  <span className="fw-semibold">
                    {requiredBook.publicationHouse}
                  </span>
                </p>

                {isAddedToCart && (
                  <div className="my-3">
                    Quantity:{" "}
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => decreaseItemQuantity(id)}
                    >
                      -
                    </button>
                    <span className="mx-2 fw-semibold">
                      {isAddedToCart.quantity}
                    </span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2"
                      onClick={() => increaseItemQuantity(id)}
                    >
                      +
                    </button>
                  </div>
                )}

                <hr />
                <h3 className="fw-bold">INR {requiredBook.price}</h3>
                <hr />

                <h5>Description</h5>
                <p className="text-muted">{requiredBook.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
