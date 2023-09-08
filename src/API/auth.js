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




   
 