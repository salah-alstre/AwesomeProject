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

// export const fetchApi = async (route, method, body) => {
//     const url = domain + route;
//     return await fetch(url, {
//         method: method || 'GET',
//         headers: {
//             'Content-Type': 'application/json', 
//         },
//         body: body,

//     }).then(res => res.json())
//     .catch((error) => {
//         console.error("fetch Error", error.message);
//     });
// }