import { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";

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
        console.log(response);
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
        <div>
            <Tabs
                defaultActiveKey="Buenos Aires"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                {provinces.map((province) => (
                    <Tab eventKey={province.name} title={province.name} key={province.id}>
                        {branchOffices.filter((branch) => branch.province_id === province.id)
                            .map((filteredBranch) => (
                                <div key={filteredBranch.id}>
                                    <p>Departamento: {filteredBranch.departments}</p>
                                    <p>Dirección: {filteredBranch.address}</p>
                                    <p>Telefono: {filteredBranch.telephone}</p>
                                    <br />
                                </div>
                            ))}
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default DivSucursales;