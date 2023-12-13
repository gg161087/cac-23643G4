import { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
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
        <Tabs
            defaultActiveKey="Productos"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey='Productos' title='Productos'>
                <h2>Productos</h2>
                <CrudProducts products={products}></CrudProducts>
            </Tab>
            <Tab eventKey='Categorias' title='Categorias'>
                <CrudCategories categories={categories}></CrudCategories>
            </Tab>
            <Tab eventKey='Usuarios' title='Usuarios'>
                <CrudUsers users={users}></CrudUsers>
            </Tab>
            <Tab eventKey='Roles' title='Roles'>
                <CrudRoles roles={roles}></CrudRoles>
            </Tab>
            <Tab eventKey='Suscriptores' title='Suscriptores'>
                <CrudSubscribers subscribers={subscribers}></CrudSubscribers>
            </Tab>
            <Tab eventKey='Provincias' title='Provincias'>
                <CrudProvinces provinces={provinces}></CrudProvinces>
            </Tab>
            <Tab eventKey='Sucursales' title='Sucursales'>
                <CrudBranchOffices branchOffices={branchOffices}></CrudBranchOffices>
            </Tab>
        </Tabs>
    )
}