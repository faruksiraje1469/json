const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then ( data =>{
        dispalyPost(data)
    })
}

const dispalyPost = (posts) => {

    const postContainer = document.getElementById("post-container");
   for (const post of posts){
    const div = document.createElement("div");
    div.innerHTML = `
    <h1>omar</h1>
    <p>siraje</p>

    `;
    postContainer.appendChild(div);
     
   }
}
handlePost()