// Remember to import the data and Dog class!
import {DogConstructer} from "./Dog.js"
import {dogs} from "./data.js"

let getNewDog = dogs ? dogs : {}
let noSpam = false

document.addEventListener("click", (e)=>{
    if(!noSpam){
        if (e.target.dataset.like){
            hasBeenLiked()
        } else if(e.target.dataset.dislike){
            hasBeenDisliked()
        }
    }
})


function hasBeenLiked() {
    noSpam = true
    document.getElementById("liked-top-left").style.display = "inline-block"
    setTimeout(()=>{ render() }, 2000)
}

function hasBeenDisliked() {
    noSpam = true
    document.getElementById("dislike-top-left").style.display = "inline-block"
    
    setTimeout(()=>{ render() }, 2000)
}

function render(){
    noSpam = false
    getNewDog = dogs.shift()
    const dogEl = new DogConstructer(getNewDog)
    document.getElementById("user-content").style.backgroundImage = `url(${dogEl.avatar})`
    document.getElementById("user-content").innerHTML = dogEl.constructDogData()
}
render()