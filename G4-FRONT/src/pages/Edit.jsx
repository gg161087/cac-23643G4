import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EditProducto } from '../components/edit/EditProducto.jsx';
import { EditCategory } from './../components/edit/EditCategory.jsx';
import { EditBranchOffice } from './../components/edit/EditBranchOffice.jsx';
import { EditProvince } from './../components/edit/EditProvince.jsx';
import { EditRole } from './../components/edit/EditRole.jsx';
import { EditSubscribers } from './../components/edit/EditSubscribers.jsx';
import { EditUser } from './../components/edit/EditUser.jsx';

export const Edit = () => {
    const { category } = useParams();
    const { id } = useParams();
    const [component, setComponent] = useState('')

    const getParam = (category) => {
        switch (category) {
            case 'products':
                return <EditProducto id={id}/>
            case 'categories':
                return <EditCategory id={id}/>
            case 'branch_offices':
                return <EditBranchOffice id={id}/>
            case 'provinces':
                return <EditProvince id={id}/>
            case 'roles':
                return <EditRole id={id}/>
            case 'subscribers':
                return <EditSubscribers id={id}/> 
            case 'users':
                return <EditUser id={id}/> 
            default:
                return <div>Default</div>
        }
    }
    useEffect(() => {
        setComponent(getParam(category))
    }, [category])
    if (!component) {
        return (
            <div className="container">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            {component}
        </div>
    )
}