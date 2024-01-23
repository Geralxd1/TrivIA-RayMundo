// apiService.js
import axios from 'axios';
import ENDPOINTS from '../EndPoints/EndPoints';

const apiUrl = ENDPOINTS.endGuardarUsuario();

export const postUser = async (nickname, score) => {
    try {
        const response = await axios.post(apiUrl, {
            nickname: nickname,
            score: score,
        });
        return response.data; // Puede contener el ID del usuario recién creado
    } catch (error) {
        alert(error)
        throw error;
    }
};

const endRanking = ENDPOINTS.endObtenerDatosRanking()
export const getDatosRanking = async () => {
    try {
        const response = await axios.get(endRanking);
        return response.data;
    } catch (error) {
        alert(error)
        return null;
    }
};

// Función para realizar una solicitud GET
const endDatos = ENDPOINTS.endObtenerDataPregunta()
export const getData = async (endPersonalizado) => {
    try {
        const response = await axios.get(`${endDatos}/${endPersonalizado}`);
        const datos = response.data;
        return datos;
    } catch (error) {
        alert("Error al obtener datos:", error);
        return null;
    }
};