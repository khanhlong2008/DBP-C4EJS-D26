    // let user = {
//     name :"son",
//     role :"teaching",
// }
// console.log(typeof user)
// console.log(user)

// let user_as_json = JSON.stringify(user)
// //stringify bien oj thanh chuoi de chuyen thanh file json
// console.log(typeof user_as_json)
// console.log(user_as_json)

// let user_as_json = JSON.parse(user_as_json)
// console.log(typeof user_as_json)
// console.log(user_as_json)


// let urc = "https://pokeapi.co/api/v2/pokemon/1"
//  fetch("urc")
//  .then((request)=>{
//      return request.json
//  })
//  .then((data)=>{
//     console.log(data)
//  })
// console.log("fetched!")
//async , await de tra ve respons
// let btn = document.querySelector("input[type=button]");
// btn.addEventListener("click",async ()=>{
//     // let urc = 
//     let  response = await fetch(url)
//     let body = await response.json()
//     console.log(body)
// })
function render(pokemon){
    // thao tác hiển thị lên màn hình
    let out = document.querySelector("#output")
    let stats = ""
    for(let i =0;i<pokemon.stats.length;i++){
        stats = stats+ `<li>${pokemon.stats[i]}</li>`

    }
    // for (let stat of pokemon.stats){
    //     stats = stats+ `<li>${stat}</li>`
    // }
        
    out.innerHTML = ""
    out.insertAdjacentHTML("beforeend",`
    <p>${pokemon.name}</p>
    <img src="${pokemon.image}"/>
    <ul>
        ${stats}
    </ul>
    `)
    out.insertAdjacentHTML
}

btn.addEventListener("click",async ()=>{
    // thực hiện việc lấy dữ liệu
    // bất đồng bộ nên dùng await
    let url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*800)}`
    let response = await fetch(url)
    let body = await response.json()
    // đồng bộ rồi => rút thông tin và hiển thị!
    console.log(body)
    let pokemon = {
        image : "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        name:"name",
        stats: []
    }
    pokemon.image = body["sprites"]["other"]["official-artwork"]["front_default"]
    pokemon.name = body.name.toUpperCase()
    for(let stat of body["stats"]){
        pokemon.stats.push(stat.base_stat)
    }
    
    render(pokemon)
})