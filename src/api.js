// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://greenvelvet.alwaysdata.net/pfc/',
  headers: {
    'Content-Type': 'application/json',
    'token': '2f8467560a6d3567489221bc20844fc3aaffbb81', // mon token  
  },
});
const deleteChecklist = async (id) => {
  try {
    const response = await api.delete(`/checklists/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression de la checklist :", error);
    throw error; // Lancer une erreur pour que le composant puisse gérer les échecs
  }
};

export { deleteChecklist };
export default api;


  
