import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
    const totalPage = props.totalPage;
    const handlePageClick = (data) => {
        props.currentPage(data.selected +1);
    }
    return (
        <div>
            <ReactPaginate 
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-end'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>

    )
}

export default Pagination