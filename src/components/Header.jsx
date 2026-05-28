import { NavLink, useNavigate } from "react-router-dom";
import useBookContext from "../contexts/BookContext";

const Header = () => {
  const {
    searchText,
    setSearchText,
    setSearchQuery,
    wishlistItems,
    cartItems,
  } = useBookContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchText);
    navigate("/books");
  };
  return (
    <header className="shadow-sm" style={{ backgroundColor: "#0f172a" }}>
      <nav className="navbar navbar-expand-lg navbar-dark container py-3">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white fw-bold" to="/">
            bookCart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="d-flex justify-content-center align-items-center navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  style={({ isActive }) => ({
                    color: isActive ? "#3b82f6" : "#ffffff",
                    fontWeight: isActive ? "600" : "400",
                  })}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#3b82f6" : "#ffffff",
                    fontWeight: isActive ? "600" : "400",
                  })}
                  to="/books"
                >
                  All Books
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#3b82f6" : "#ffffff",
                    fontWeight: isActive ? "600" : "400",
                  })}
                  to="/wishlist"
                >
                  Wishlist{" "}
                  {wishlistItems && <span>({wishlistItems.length})</span>}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#3b82f6" : "#ffffff",
                    fontWeight: isActive ? "600" : "400",
                  })}
                  to="/cart"
                >
                  Cart{" "}
                  {cartItems && (
                    <span>
                      (
                      {cartItems.length === 0
                        ? 0
                        : cartItems.reduce(
                            (acc, curr) => acc + curr.quantity,
                            0,
                          )}
                      )
                    </span>
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userprofile">
                  <i
                    className="bi bi-person-circle fs-5"
                    style={{ color: "#ffffff" }}
                  ></i>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary fw-semibold" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
