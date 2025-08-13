let header=document.createElement("h1")
header.textContent="Head OR Tail Tosser"
header.id="h1"
document.body.appendChild(header)

let image=document.createElement("img")
image.src="https://tse3.mm.bing.net/th/id/OIP.u313lXWkrjcT6YnqJLNYVwHaEK?pid=Api&P=0&h=180"
image.id="img"
document.body.appendChild(image)

const headsImg = "https://i.ytimg.com/vi/6FLBpQQP96U/hqdefault.jpg";
const tailsImg = "https://cdn.textstudio.com/output/sample/normal/3/8/2/6/tail-logo-73-16283.png";


let btn=document.createElement("button")
btn.textContent="Click me"
btn.id="btn"
let result=document.createElement("p")
result.id="result"
document.body.appendChild(document.createElement("br"))
document.body.appendChild(btn)

 btn.onclick=function tosscoin(){
    let randomnum=Math.ceil(Math.random() *2)
    if(randomnum==1){
        image.src=headsImg;
        result.textContent="Head"
        
    }else{
        image.src=tailsImg
        result.textContent="Tail"
        
    }
}
tosscoin()

