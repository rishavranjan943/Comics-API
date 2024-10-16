Comic Book Inventory API

This project provides a RESTful API for managing a comic book inventory, allowing managers to add, update, delete, and retrieve details of comic books. It supports pagination, filtering, and sorting of the comic book list, making it efficient for large datasets.

Features:
Create Comic Book: Add a new comic book to the inventory.
Update Comic Book: Modify existing comic book details.
Delete Comic Book: Remove a comic book from the inventory.
Get All Comic Books: Retrieve a paginated, filtered, and sorted list of comic books.
Get Comic Book Details: Fetch details of a specific comic book by its ID.


Installation :

Prerequisites
Make sure you have the following installed:
1.Node.js (v12.x or higher)
2.MongoDB (local or cloud-based)


1. Clone the repository
2.Install dependenies -> npm install
3. Set up environment variables -> MONGO_URL,PORT
4. Start the development server -> nodemon start


API Endpoints

1. Create a Comic Book
URL: /api/comics
Method: POST
Description: Adds a new comic book to the inventory.

2. Edit a Comic Book
URL: /api/comics/:id
Method: PUT
Description: Update the details of an existing comic book.

3. Delete a Comic Book
URL: /api/comics/:id
Method: DELETE
Description: Remove a comic book from the inventory.

4.Get All Comic Books (with Pagination, Filtering, and Sorting)
URL: /api/comics
Method: GET
Description: Fetch all available comic books, with support for pagination, filtering by attributes, and sorting.
Request Query Parameters:

Pagination:
page: Page number (default: 1)
limit: Number of items per page (default: 10)
Sorting:
sortBy: Attribute to sort by (default: book_name)
order: asc (ascending) or desc (descending) (default: asc)
Filtering:
author: Filter by author name
year: Filter by year of publication
price: Filter by price range (e.g., 10-50)
condition: Filter by condition (new, used)

5.Get Comic Book Details
URL: /api/comics/:id
Method: GET
Description: Fetch full details of a specific comic book by its ID.

