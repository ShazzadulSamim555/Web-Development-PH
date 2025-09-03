const addPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))

}

const displayPosts=(posts)=>{
    const ulContainer=document.getElementById('ul-container');
    console.log(ulContainer);

    posts.forEach(post => {
        console.log(post)
        const li= document.createElement('li');
        li.innerText= post.title;
        ulContainer.appendChild(li);
    });
}