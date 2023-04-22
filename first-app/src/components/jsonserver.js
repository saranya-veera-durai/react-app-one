// create sever folder
// npm init
// npm i json-server
// add this line in package.json "server": "json-server --watch db.json --port 8000"
// npm run server




import React, { useState,useEffect } from "react";
import axios from "axios"
export default function JsonServer() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  useEffect(() => {
           axios.get("http://localhost:8000/booklist")
           .then((response)=>{
           console.log(response)
           setBooks(response.data)
           })
  }, []);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);


  function addBook(e) {
    e.preventDefault();

    let book = {
      title,
      author,
      isbn,
    };
    setBooks([...books, book]);
    setAuthor("");
    setTitle("");
    setIsbn("");
    e.preventDefault();
    console.log({
        title,
        author,
        isbn,})
    axios.post("http://localhost:8000/booklist",{
        title:title,
        author:author,
        isbn:isbn
       
       })
    .then((response)=>{
    console.log(response.data)
    })
  }


  function deleteBook(isbn) {
    const filtered = books.filter((fil) => fil.isbn !== isbn);
    setBooks(filtered);
    
  }

  return (
    <div>
      <h1>Adding Book List</h1>
      <div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Isbn"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
            <button onClick={addBook}>ADD</button>
          </form>
        </div>
        <div>
          <h1>Book List</h1>
          {books.map((boo) => {
            return (
              <div key={boo.id}>
                {boo.title}----------{boo.author}------------{boo.isbn}
                {/* <button onClick={() => deleteBook(boo.isbn)}>delete</button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
