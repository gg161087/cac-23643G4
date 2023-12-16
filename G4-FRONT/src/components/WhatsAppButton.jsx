import "./WhatsAppButton.css";
import botonWhatsapp from "./../assets/botonWhatsapp/botonWhatsapp.png";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/XXXXXXXXXX?text=Hola"; // Reemplaza con tu enlace de WhatsApp

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={botonWhatsapp} alt="Botón WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
