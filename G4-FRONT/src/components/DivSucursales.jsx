import { useState, useEffect } from "react";
import { getDinamic } from '../utils/getDinamic.js';

const DivSucursales = () => {
    const [branchOffices, setBranchOffices] = useState([]);
    const [provinces, setProvinces] = useState([]);

    const getProvinces = async () => {
        const response = await getDinamic('provinces');
        setProvinces(response);
    };
    const getBranchOffices = async () => {
        const response = await getDinamic('branch_offices');        
        setBranchOffices(response);
    };

    useEffect(() => {
        getProvinces();
        getBranchOffices();
    }, []);

    if (!provinces && !branchOffices) {
        <div className="container">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {provinces.map((province) => (
                    <li className="nav-item" key={province.id}>
                        <a className={`nav-link ${province.id === 1 ? 'active' : ''}`} id={`tab-${province.id}`} data-bs-toggle="tab" href={`#tabContent-${province.id}`} role="tab" aria-controls={`tabContent-${province.id}`} aria-selected={province.id === 1 ? 'true' : 'false'}>
                            {province.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="tab-content mt-4" id="myTabContent">
                {provinces.map((province) => (
                    <div className={`tab-pane fade ${province.id === 1 ? 'show active' : ''}`} id={`tabContent-${province.id}`} role="tabpanel" aria-labelledby={`tab-${province.id}`} key={province.id}>
                        {branchOffices
                            .filter((branch) => branch.province_id === province.id)
                            .map((filteredBranch) => (
                                <div key={filteredBranch.id}>
                                    <p>Departamento: {filteredBranch.departments}</p>
                                    <p>Dirección: {filteredBranch.address}</p>
                                    <p>Telefono: {filteredBranch.telephone}</p>
                                    <br />
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DivSucursales;