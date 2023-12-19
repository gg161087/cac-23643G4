import { useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx';

export const TableWithPagination = ({ data }) => {

    if (!data || !Array.isArray(data) || data.length === 0) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const columns = Object.keys(data[0]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="table-responsive">
            <table className="table table-limit-tr-width">
                <thead className='table-dark'>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                            {Object.keys(item).map((key, index) => (
                                <td key={index}>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <nav>
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => paginate(currentPage - 1)}
                        >
                            <Icon css='icon' icon={faChevronLeft}/>                            
                        </button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                        <li
                            key={index}
                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => paginate(currentPage + 1)}
                        >
                            <Icon css='icon' icon={faChevronRight}/>  
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};