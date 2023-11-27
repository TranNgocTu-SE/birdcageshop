import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { userInfo } = useSelector((state) => state.auth);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid my-1">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <div className="input-group rounded">
                                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                <span className="input-group-text border-0" id="search-addon">
                                <i className="bi bi-search"></i>
                                </span>
                            </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">{userInfo?.username}</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar