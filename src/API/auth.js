import axios from 'axios';
import configs from '../Config/config';

export async function userLogin(props) {
  try {
    console.log(props);
    let res = await axios.post(`${configs.apiUrl}/login`, props, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    return error.response;
  }
}

export async function fetchDataFromAPI(token) {
  try {
    const res = await axios.get(`${configs.apiUrl}/student`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function getuserFromAPI(token) {
  try {
    const res = await axios.get(`${configs.apiUrl}/getuser`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (error) {
    return error.response;
  }

}

export async function AddcounsellorData(newCounsellorData) {
  try {
    console.log(newCounsellorData);
    let res = await axios.post(`${configs.apiUrl}/createUser`, newCounsellorData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    return error.response;
  }
}

// export async function AddcounsellorData(newCounsellorData) {
//   try {
//     console.log(newCounsellorData);
//     const response = await fetch(`${configs.apiUrl}/createUser`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: newCounsellorData, 
//     });

//     if (response.status === 201) {
//       return response;
//     } else {
//       console.log('Failed to create counselor:', response.status);
//       return null;
//     }
//   } catch (error) {
//     console.error('Error creating counselor:', error);
//   }
// }
