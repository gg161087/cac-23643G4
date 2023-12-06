import { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Departamentos from "../pages/Departamentos";
import SucursalModal from "../pages/SucursalModal";

import { getDinamic } from './../utils/getDinamic.js';

const provincias = [
    {
        nombre: "Buenos Aires",
        departamentos: ["Avellaneda", "Pergamino", "San Miguel"],
    },

    {
        nombre: "Córdoba",
        departamentos: ["Córdoba", "Río Cuarto", "Río Segundo"],
    },

    {
        nombre: "Salta",
        departamentos: ["General Güemes", "Orán", "Salta"],
    },

    {
        nombre: "Santa Fe",
        departamentos: ["Rafaela", "Rosario", "Santa Fe"],
    },

    {
        nombre: "Tucumán",
        departamentos: ["Concepción", "Famaillá", "San Miguel de Tucumán"],
    },
];

const ContenidoSucursales = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProvincia, setSelectedProvincia] = useState(null);
    const [selectedDepartamento, setSelectedDepartamento] = useState(null);
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

    const handleProvinciaClick = (provincia) => {
        setSelectedProvincia(provincia.nombre);
    };

    const handleDepartamentoClick = (departamento) => {
        setSelectedDepartamento(departamento);
        setShowModal(true);
        console.log(showModal);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDepartamento(null);
    };

    if (!provinces && !branchOffices) {
        return null
    }

    return (
        <div>
            <Tabs
                defaultActiveKey="profile"
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

            <Row>
                {provincias.map((provincia) => (
                    <Col key={provincia.nombre} xs={4}>
                        <Button
                            variant="primary"
                            style={{ width: "100%", marginBottom: "10px" }}
                            onClick={() => handleProvinciaClick(provincia)}
                        >
                            {provincia.nombre}
                        </Button>
                    </Col>
                ))}
            </Row>
            {selectedProvincia && (
                <Departamentos
                    provincia={selectedProvincia}
                    onDepartamentoClick={handleDepartamentoClick}
                />
            )}

            {/* Modal para mostrar detalles de la sucursal */}
            {selectedDepartamento && (
                <SucursalModal
                    departamento={selectedDepartamento}
                    handleCloseModal={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ContenidoSucursales;