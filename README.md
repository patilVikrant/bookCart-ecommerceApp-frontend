# BookCart – Books Ecommerce App

A Fullstack Ecommerce App with functionality such as product listing, filtering, cart management, wishlist management, address management, and order management.
Built with React for frontend, Node/Express for backend, MongoDB for Database and Bootstrap for styling.

---

## Demo Link

[Live Demo] (https://neogcamp-ecommerce-app-frontend.vercel.app/)

---

## Quick Start

```
git clone https://github.com/patilVikrant/neogcamp-ecommerceApp-frontend.git
cd neogcamp-ecommerceApp-frontend
npm install
npm run dev
```

---

## Technologies

- React JS
- React Router DOM
- React Context
- Node JS
- Express
- MongoDB

---

## Demo Video

Watch a walkthrough of all the major features of this app:
[Loom Video] (https://www.loom.com/share/85d1591ee2a748498fdcd023f394e2db)

---

## Features

**Home**

- Display links to navigate to different pages such as Home, Book listing page, Wishlist page, Cart Page and user Profile page.
- Search books by title.
- Display top rated books.

**Product Listing**

- Display all the books in a card format with cover page image, title, author, rating, price.
- Filters to filter books based on price, category and rating.
- Buttons to view book details and add it to cart and icon to add book to wishlist.

**Product Detail**

- Display all the details of the product.
- Buttons to add book to cart and buy it and icon to add book to wishlist.

**Wishlist**

- Display all the items added to the wishlist and their number.
- Remove item from wishlist.

**Cart**

- Display all the items added to the cart and their number.
- Increase, decrease the quantity of the items.
- Remove the item from cart.

**User Profile**

- Display user details such as Nmae, email, contact number and addresses.
- Can add, edit and delete address.

**Order**

- Display all the orders with day and date user has placed.

**Order Details**

- Display all the details of the order placed with delivery address, date and time, product details.

---

## API Reference

### **GET /books**<br>

List all books<br>

Sample Response:<br>

```
[{_id, title, author, price, rating, category, publicationHouse, image, description }, ....]
```

### **GET /books/:id**<br>

List details of one book<br>

Sample Response:<br>

```
{_id, title, author, price, rating, category, publicationHouse, image, description }
```

### **GET /cart**<br>

List details of books added to the cart<br>

Sample Response:<br>

```
[{_id, title, author, price, rating, category, publicationHouse, image, description, quantity }, ...]
```

### **POST /cart**<br>

Add new item in cart<br>

Sample Response:<br>

```
{message: "Item added successfully, item:{_id, title, author, price, rating, category, publicationHouse, image, description, quantity }}
```

### **POST /cart/increase/:id**<br>

Increase the quantity of item in cart<br>

Sample Response:<br>

```
{message: "Item updated successfully, item:{_id, title, author, price, rating, category, publicationHouse, image, description, quantity }}
```

### **POST /cart/decrease/:id**<br>

Decrease the quantity of item in cart<br>

Sample Response:<br>

```
{message: "Item updated successfully, item:{_id, title, author, price, rating, category, publicationHouse, image, description, quantity }}
```

### **DELETE /cart/:id**<br>

Delete item from the cart<br>

Sample Response:<br>

```
{message: "Item deleted successfully, item:{_id, title, author, price, rating, category, publicationHouse, image, description, quantity }}
```

### **GET /wishlist**<br>

Display all the item in the wishlist<br>

Sample Response:<br>

```
[{_id, title, author, price, rating, category, publicationHouse, image, description, isAddedToWishlist}, ...]
```

### **POST /wishlist/:id**<br>

Add item in the wishlist<br>

Sample Response:<br>

```
{ message: "Item added successfully", item: {_id, title, author, price, rating, category, publicationHouse, image, description, isAddedToWishlist}}
```

### **DELETE /wishlist/:id**<br>

Delete item in the wishlist<br>

Sample Response:<br>

```
{ message: "Item removed successfully", item: {_id, title, author, price, rating, category, publicationHouse, image, description, isAddedToWishlist}}
```

---

## Contact

For bugs and feature requests, please reach out to pvikrant248@gmail.com
