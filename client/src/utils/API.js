import axios from "axios";

export default {
  // Gets all books
  getEvents: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getGroups: function(id) {
    return axios.get("/api/books/" + id);
  },
  getMessages: function(id) {
    return axios.get("/api/books/" + id);
  }
//   // Deletes the book with the given id
//   deleteC: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
