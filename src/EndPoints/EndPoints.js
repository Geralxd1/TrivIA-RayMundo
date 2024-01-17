const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ENDPOINTS = {
    endGuardarUsuario: () => `${API_BASE_URL}/users`,
    endObtenerDato: () => `${API_BASE_URL}/users`,
    // Agrega otros endpoints según sea necesario
};

export default ENDPOINTS;