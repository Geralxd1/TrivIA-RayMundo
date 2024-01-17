// apiService.js
import axios from 'axios';
import ENDPOINTS from '../EndPoints/EndPoints';

const apiUrl = ENDPOINTS.endGuardarUsuario();

const postUsername = async (username) => {
    try {
        const response = await axios.post(
            `${apiUrl}`,
            { username },
        );

        return response.data; // Puede contener el ID del usuario recién creado
    } catch (error) {
        console.error('Error al enviar el nombre de usuario:', error);
        throw error;
    }
};

const getUserId = async (username) => {
    try {
        const response = await axios.get(
            `${apiUrl}/users`,
            {
                params: { username },
                headers: { 'api-key': apiKey }
            }
        );

        // Suponiendo que la respuesta contiene un array de usuarios y tomamos el primer resultado
        const user = response.data[0];
        return user ? user.id : null;
    } catch (error) {
        console.error('Error al obtener el ID del usuario:', error);
        throw error;
    }
};

const postScore = async (userId, score) => {
    try {
        const response = await axios.post(
            `${apiUrl}/scores`,
            { userId, score },
            { headers: { 'api-key': apiKey } }
        );

        return response.data; // Puede contener información adicional sobre la asignación de puntajes
    } catch (error) {
        console.error('Error al enviar el puntaje:', error);
        throw error;
    }
};

export { postUsername, getUserId, postScore };
