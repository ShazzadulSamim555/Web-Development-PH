const addPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))

}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

const displayPosts=(posts)=>{
    const postContainer= document.getElementById('post-container');
    postContainer.innerHTML="";
    posts.forEach(post => {
        const card= document.createElement('div');
        card.innerHTML=`<div class="card shadow space-y-2 p-4 rounded-lg h-full">
            <h1 class="text-3xl font-bold">${post.id}</h1>
            <h3 class="text-2xl font-bold font-stretch-200%">${post.title}</h3>
            <p class="text-gray-800 font-semibold font-stretch-100%">${post.body}</p>
        </div>`;
        postContainer.appendChild(card);
    });
}