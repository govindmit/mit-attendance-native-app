import axios from "axios";
import configs from "../Config/config";


export async function userLogin(formData) {
  try {
    const res = await axios.post(`${configs.apiUrl}/login`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
}



export async function fetchDataFromAPI(props) {
  try {
   
    const res = await axios.get(`${configs.apiUrl}/student`,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${props}`, 
      },
    });

    return res;
  }
   catch (error) {
    return error.response;
  }
}
