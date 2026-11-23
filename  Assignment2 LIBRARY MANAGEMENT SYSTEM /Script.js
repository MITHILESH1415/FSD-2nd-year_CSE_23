// let books = [
//     {
//         id: 1,
//         title: "The Alchemist",
//         author: "Paulo Coelho"
//     },
//     {
//         id: 2,
//         title: "Wings of Fire",
//         author: "A.P.J. Abdul Kalam"
//     }
// ];

// function displayBooks() {
//     let list = document.getElementById("bookList");
//     list.innerHTML = "";

//     books.forEach(book => {
//         list.innerHTML += `
//             <div class="book">
//                 <div>
//                     <b>${book.title}</b><br>
//                     Author: ${book.author}
//                 </div>

//                 <div>
//                     <button class="edit" onclick="editBook(${book.id})">
//                         Edit
//                     </button>

//                     <button class="delete" onclick="deleteBook(${book.id})">
//                         Delete
//                     </button>
//                 </div>
//             </div>
//         `;
//     });
// }

// function addBook() {
//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value;

//     if (title == "" || author == "") {
//         alert("Please enter book details");
//         return;
//     }

//     books.push({
//         id: Date.now(),
//         title: title,
//         author: author
//     });

//     document.getElementById("title").value = "";
//     document.getElementById("author").value = "";

//     displayBooks();
// }

// function editBook(id) {
//     let book = books.find(b => b.id == id);

//     let title = prompt("Enter new title", book.title);
//     let author = prompt("Enter new author", book.author);

//     if (title && author) {
//         book.title = title;
//         book.author = author;
//         displayBooks();
//     }
// }

// function deleteBook(id) {
//     books = books.filter(book => book.id != id);
//     displayBooks();
// }

// displayBooks();


const API_URL = "/api/books";



const bookForm = document.getElementById("bookForm");

const bookId = document.getElementById("bookId");

const title = document.getElementById("title");

const author = document.getElementById("author");

const year = document.getElementById("year");

const booksContainer = document.getElementById("booksContainer");

const formTitle = document.getElementById("formTitle");

const cancelBtn = document.getElementById("cancelBtn");



async function getBooks() {

    try {

        const response = await fetch(API_URL);

        const books = await response.json();

        displayBooks(books);

    } catch (error) {

        console.error("Error:", error);

        booksContainer.innerHTML = `
            <p class="no-books">
                ❌ Unable to load books.
            </p>
        `;
    }
}




function displayBooks(books) {

    booksContainer.innerHTML = "";


    if (books.length === 0) {

        booksContainer.innerHTML = `
            <p class="no-books">
                📚 No books available.
            </p>
        `;

        return;
    }


    books.forEach(book => {

        const card = document.createElement("div");

        card.className = "book-card";


        card.innerHTML = `

            <h3>📖 ${book.title}</h3>

            <p>
                <strong>Author:</strong>
                ${book.author}
            </p>

            <p>
                <strong>Year:</strong>
                ${book.year}
            </p>


            <div class="book-actions">

                <button
                    class="btn edit-btn"
                    onclick="editBook('${book._id}')"
                >
                    ✏️ Edit
                </button>


                <button
                    class="btn delete-btn"
                    onclick="deleteBook('${book._id}')"
                >
                    🗑️ Delete
                </button>

            </div>

        `;


        booksContainer.appendChild(card);

    });
}




bookForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    const bookData = {

        title: title.value,

        author: author.value,

        year: year.value

    };


    try {

        
        if (bookId.value) {

            await updateBook(bookId.value, bookData);

        }

        else {

            const response = await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(bookData)

            });


            if (!response.ok) {

                throw new Error("Failed to add book");

            }


            alert("✅ Book added successfully!");

        }


        resetForm();

        getBooks();


    } catch (error) {

        console.error("Error:", error);

        alert("❌ Something went wrong!");

    }

});
async function updateBook(id, bookData) {

    try {

        const response = await fetch(`${API_URL}/${id}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(bookData)

        });


        if (!response.ok) {

            throw new Error("Failed to update book");

        }


        alert("✅ Book updated successfully!");

    } catch (error) {

        console.error("Error:", error);

        alert("❌ Unable to update book!");

    }
}
async function editBook(id) {

    try {

        const response = await fetch(`${API_URL}/${id}`);

        const book = await response.json();

        bookId.value = book._id;

        title.value = book.title;

        author.value = book.author;

        year.value = book.year;

        formTitle.innerHTML = "✏️ Update Book";

        cancelBtn.style.display = "inline-block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


    } catch (error) {

        console.error("Error:", error);

        alert("❌ Unable to get book details!");

    }
}

async function deleteBook(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });


        if (!response.ok) {

            throw new Error("Failed to delete book");

        }
        alert("🗑️ Book deleted successfully!");
        getBooks();
    } catch (error) {

        console.error("Error:", error);

        alert("❌ Unable to delete book!");

    }
}
function cancelEdit() {

    resetForm();

}

function resetForm() {

    bookForm.reset();

    bookId.value = "";

    formTitle.innerHTML = "➕ Add New Book";

    cancelBtn.style.display = "none";

}

document.addEventListener("DOMContentLoaded", function () {

    getBooks();

});