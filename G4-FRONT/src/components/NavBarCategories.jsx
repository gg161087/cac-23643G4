import { Link } from 'react-router-dom';

export const NavBarCategories = ({ categories }) => {    
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">                                    
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">                        
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                                
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <Link className="dropdown-item" to={`products/${category.name}`}>
                                            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>         
                </div>
            </div>
        </nav>
    )  
}
