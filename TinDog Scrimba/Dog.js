// Create the Dog class here
import {dogs} from "./data.js"

class DogConstructer {
    constructor(data){
        Object.assign(this, data)
    }
    constructDogData(){
        const {name, age, bio, avatar} = this
        return `
        <h1 id="liked-top-left" class="liked-top-left">LIKE</h1>
        <h1 id="dislike-top-left" class="dislike-top-left">DISLIKE</h1>
        <div class="dogs-data">
            <h1 class="dogs-name">${name}</h1>
            <h2>${age}</h2>
            <p>${bio}</p>
        </div>`
    }
}

export {DogConstructer}