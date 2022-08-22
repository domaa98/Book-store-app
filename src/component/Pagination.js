import ReactPaginate from 'react-paginate'


const Pagination = ({getBooksPerPage}) => {

  const numberOfPages = Math.ceil(68697 / 32);
  
  const hundleChange = (data) =>{
    const currentPage = data.selected + 1;
    getBooksPerPage(currentPage);
  }
   
    
  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={hundleChange}
        pageRangeDisplayed={3}
        pageCount={numberOfPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='flex justify-center items-center my-8 gap-4 flex-wrap'
      />
    </div>
  )
}

export default Pagination