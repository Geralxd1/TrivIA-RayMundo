const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ENDPOINTS = {
    endGuardarUsuario: () => `${API_BASE_URL}/player`,
    endObtenerDatosRanking: () => `${API_BASE_URL}/playersDesc`,
    endObtenerDataPregunta: () => `${API_BASE_URL}`
    // Agrega otros endpoints según sea necesario
};

export default ENDPOINTS;