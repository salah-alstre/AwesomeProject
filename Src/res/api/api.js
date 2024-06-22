const domain = "https://salah-servr.onrender.com";

export  const login = async (body)=> {
    console.log(body)
    const route = '/login';
    return await appFetch(route , 'POST', body); 

};

const appFetch = async (route , method , body )=> {
    const url = domain  + route;

    const params ={
        method: method || 'GET' ,
        headers: {
            'Content-Type': 'application/json', 
        },
    };
    
if (body){
    params.body = JSON.stringify(body) ;

}
    return await fetch(url , params)
    .then(res => res.json())
    .then (resJson => resJson)
    .catch ( e => console.log ('fetch error' , e ));

};
export const Register = async (body) => {
    // const route = '/Login' ; 
    const route = '/Register';
    console.log("body : ", body);
    return await appFetch(route, 'POST', body)
};

export  const Details = async (body)=> {
    console.log(body)
    const route = '/Details';
    return await appFetch(route , 'POST', body); 

};