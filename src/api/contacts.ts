import axios from 'axios';

export const fetchContacts = async () => {
    try{
        const response = await axios.get('https://api.dev.pastorsline.com/api/contacts.json', {
            headers: {
              Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
            }
        });
        return {
            type: 'success',
            data: response.data
        }
    }catch(error){
        console.error(`Error occured while making request, detailed error:  ${error}`);
        return {
            type: 'error',
            error,
        }
    }
}