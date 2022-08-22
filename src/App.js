import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Navbar from './component/Navbar';
import NavList from './component/NavList';
import Pagination from './component/Pagination';

const BOOKS_API = 'https://gutendex.com/books/';

function App() {

  const [books , setBooks] = useState ([]);

  const getBooks = (API) =>{
    fetch(API).then(res =>res.json()).then((res) =>{ 
      setBooks(res.results)});
  } 
  useEffect(() =>{
    getBooks(BOOKS_API)
  },[]);

 

  const getBooksPerPage = async (currentPage) =>{
    const result = await fetch(`https://gutendex.com/books/?page=${currentPage}`);
    const data = await result.json();
    setBooks(data.results);
  }; 

  

  return (
    <div className='max-w-[1200px] mx-auto bg-white'>
     <Navbar />
     <NavList />
     <Header />
     <Home booksData = {books} />
     <Pagination getBooksPerPage={getBooksPerPage} />
    </div>
  );
}

export default App;
