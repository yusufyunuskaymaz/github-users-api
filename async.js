

const users = async () => {
    const url = "https://api.github.com/users";

    const res = await fetch(url)
    const data = await res.json()
    updateDom(data)
}
users()


const updateDom = (data) => {

    data.forEach(user => {
        document.querySelector(".users").innerHTML += `
        <img width="200" src="${user.avatar_url}">
        <p><i>${user.login}</i></p>
    `
    });
    
    
}
