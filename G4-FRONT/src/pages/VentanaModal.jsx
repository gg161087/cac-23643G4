export const ModalVentana = ({ show, handleClose, message }) => {
    return (
        <div className="modal" show={show} onHide={handleClose} tabindex="-1">
            <div className="modal-header" closeButton>
                <h5 className="modal-title">ITECHNOLOGY</h5>
            </div>
            <div className="modal-body">
                <p>{message}</p>
            </div>
            <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleClose}>Cerrar</button>
            </div>
        </div>
    );
};