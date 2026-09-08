import axios from 'axios'; 

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY =  '51186890-e1c8ef6e5ef4b08950db17a2f';
const hor =      'horizontal';

export const toGet = async({page, query}) => {
    try{
      return await axios.get( BASE_URL, {
        params: {
                q:              query,
                key:            API_KEY,
                image_type:     'photo',
                orientation:    hor,
                page,
                per_page:       12,
            },
    });
    }catch(error){
        console.log(error);
    }

}