import axios from  'axios';


export const api = axios.create({

    baseURL: 'http://localhost:9001/',
    headers: {  
                'Content-Type': 'application/json; charset=utf-8',                    
                'Accept': '*/*' 
    }
});

export const get = async ( uri ) => {

    return await api.get( `/${uri}` );

}

export const post = async ( uri, data ) => {

    return await api.post( `/${uri}`, data );

}

export const put = async ( uri, data ) => {

    return await api.put( `/${uri}`, data );

}

export const remove = async ( uri ) => {

    return await api.delete( `/${uri}` );

}

