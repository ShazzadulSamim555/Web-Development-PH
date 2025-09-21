const loadUser=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

// {
//     "id": 8,
//     "name": "Nicholas Runolfsdottir V",
//     "username": "Maxime_Nienow",
//     "email": "Sherwood@rosamond.me",
//     "address": {
//         "street": "Ellsworth Summit",
//         "suite": "Suite 729",
//         "city": "Aliyaview",
//         "zipcode": "45169",
//         "geo": {
//             "lat": "-14.3990",
//             "lng": "-120.7677"
//         }
//     },
//     "phone": "586.493.6943 x140",
//     "website": "jacynthe.com",
//     "company": {
//         "name": "Abernathy Group",
//         "catchPhrase": "Implemented secondary concept",
//         "bs": "e-enable extensible e-tailers"
//     }
// }

const displayUser=(users)=>{
    const container=document.getElementById('user-container');
    // console.log(users);
    users.forEach(user => {
        //console.log(user);
        let card=document.createElement('div');
        card.innerHTML=`<div class="shadow-2xl p-7 rounded-lg flex flex-col gap-4">
            <h1 class="text-center">${user.id}</h1>
            <div>
                <h4 class="text-xl">Name: <span class="text-xl font-bold">${user.name}</span></h4>
                <h4 class="text-xl">userName: <span class="text-xl font-bold text-gray-600">${user.username}</span></h4>
            </div>
            <p class="text-xl">Email: <span class="text-xl font-bold text-blue-700">${user.email}</span></p>
            <div class="shadow p-4 flex flex-col gap-2">
                <h2 class="text-2xl font-bold">ADDRESS</h2>
                <div class="flex justify-between">
                    <p class="font-bold">Street: <span class="text-sm font-bold">${user.address.street}</span></p>
                    <p class="font-bold">Suite: <span class="text-sm font-bold">${user.address.street}</span></p>
                </div>
                <div class="shadow p-3 flex justify-between">
                    <p class="font-semibold">City: <span class="text-sm font-bold">${user.address.city}</span></p>
                    <p class="font-semibold">zip-code: <span class="text-sm font-bold">${user.address.zipcode}</span></p>
                </div>
            </div>
        </div>`;
        container.appendChild(card);
        
    });
}