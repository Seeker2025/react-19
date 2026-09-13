import axios from 'axios'; 

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY =  process.env.REACT_APP_PIXABAY_API_KEY;
const hor =      'horizontal';

console.log('API_KEY:', API_KEY);

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
        console.log('Pixabay error:', error);
        console.log(error);
    }

}