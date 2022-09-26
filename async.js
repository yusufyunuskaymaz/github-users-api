

const users = async () => {
    const url = "https://api.github.com/users";

    const res = await fetch(url)
    const data = await res.json()
    updateDom(data)
}


const updateDom = (data) => {
    const usersDiv =  document.querySelector(".users")

    data.forEach(user => {
        usersDiv.innerHTML += `
        <div class="col-lg-4">
        <img width="200" src="${user.avatar_url}">
        <p><i>${user.login}</i></p>
        </div>
    `
    });
    
    
}

window.addEventListener("load", users)