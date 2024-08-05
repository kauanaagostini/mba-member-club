import { apiConfig } from "./api-config.js";

export async function userFetchById({ userId }){
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${userId}`);
    if(response.status != 200) {
      return response;
    };

    const userData = response.json();
    return userData;
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os dados do usuário")
  }
  
}