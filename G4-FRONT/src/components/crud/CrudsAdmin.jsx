import { useState, useEffect } from "react";
import { CrudBranchOffices } from './CrudBranchOffices.jsx';
import { CrudCategories } from './CrudCategories.jsx';
import { CrudProducts } from './CrudProducts.jsx';
import { CrudProvinces } from './CrudProvinces.jsx';
import { CrudRoles } from './CrudRoles.jsx';
import { CrudSubscribers } from './CrudSubscribers.jsx';
import { CrudUsers } from './CrudUsers.jsx';

import { getDinamic } from './../../utils/getDinamic.js';

export const CrudsAdmin = () => {
    
    const [products, setProducts] = useState([]);
    const [branchOffices, setBranchOffices] = useState([]);
    const [categories, setCategories] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [roles, setRoles] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [users, setUsers] = useState([]);

    const getProducts = async () => {
        const response = await getDinamic('products');        
        setProducts(response);
    };
    const getBranchOffices = async () => {
        const response = await getDinamic('branch_offices');        
        setBranchOffices(response);
    };
    const getCategories = async () => {
        const response = await getDinamic('categories');        
        setCategories(response);
    };
    const getProvinces = async () => {
        const response = await getDinamic('provinces');        
        setProvinces(response);
    };
    const getRoles = async () => {
        const response = await getDinamic('roles');        
        setRoles(response);
    };
    const getSubscribers = async () => {
        const response = await getDinamic('subscribers');        
        setSubscribers(response);
    };
    const getUsers = async () => {
        const response = await getDinamic('users');        
        setUsers(response);
    };

    const getAll = () => {
        getProducts();
        getBranchOffices();
        getCategories();
        getProvinces();
        getRoles();
        getSubscribers();
        getUsers();
    }
    useEffect(() => {
        getAll()
    }, []);

    if (!products && !branchOffices && !categories && !provinces && !roles && !subscribers && !users) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (      
        <div className="container mt-4">
      <ul className="nav nav-tabs" id="myTabCrud" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link active" id="tabProducts" data-bs-toggle="tab" href="#tabProductsContent" role="tab" aria-controls="tabProductsContent" aria-selected="true">
            Productos
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="tabCategories" data-bs-toggle="tab" href="#tabCategoriesContent" role="tab" aria-controls="tabCategoriesContent" aria-selected="false">
            Categorías
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="tabBranchOffices" data-bs-toggle="tab" href="#tabBranchOfficesContent" role="tab" aria-controls="tabBranchOfficesContent" aria-selected="false">
            Sucursales
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="tabProvinces" data-bs-toggle="tab" href="#tabProvincesContent" role="tab" aria-controls="tabProvincesContent" aria-selected="false">
            Provincias
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="tabSubscribers" data-bs-toggle="tab" href="#tabSubscribersContent" role="tab" aria-controls="tabSubscribersContent" aria-selected="false">
            Suscriptores
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="tabUsers" data-bs-toggle="tab" href="#tabUsersContent" role="tab" aria-controls="tabUsersContent" aria-selected="false">
            Usuarios
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="tabRoles" data-bs-toggle="tab" href="#tabRolesContent" role="tab" aria-controls="tabRolesContent" aria-selected="false">
            Roles
          </a>
        </li>        
      </ul>

      <div className="tab-content" id="myTabCrudContent">
        <div className="tab-pane fade show active" id="tabProductsContent" role="tabpanel" aria-labelledby="tabProducos">
          <CrudProducts products={products} />
        </div>
        <div className="tab-pane fade" id="tabCategoriesContent" role="tabpanel" aria-labelledby="tabCategories">
          <CrudCategories categories={categories}/>
        </div>
        <div className="tab-pane fade" id="tabBranchOfficesContent" role="tabpanel" aria-labelledby="tabBranchOffices">
          <CrudBranchOffices branchOffices={branchOffices}/>
        </div> 
        <div className="tab-pane fade" id="tabProvincesContent" role="tabpanel" aria-labelledby="tabProvinces">
          <CrudProvinces provinces={provinces}/>
        </div> 
        <div className="tab-pane fade" id="tabSubscribersContent" role="tabpanel" aria-labelledby="tabSubscribers">
          <CrudSubscribers subscribers={subscribers}/>
        </div> 
        <div className="tab-pane fade" id="tabUsersContent" role="tabpanel" aria-labelledby="tabUsers">
          <CrudUsers users={users}/>
        </div> 
        <div className="tab-pane fade" id="tabRolesContent" role="tabpanel" aria-labelledby="tabRoles">
          <CrudRoles roles={roles}/>
        </div>         
      </div>
    </div>
    )
}