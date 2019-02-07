export function add(x, y){
    return x+y;
}
//name exports
//called be their original definition names

//named export above and below
export function subtract(x, y){
    return x - y;
}

export const myArray = ['my', 'array'];

//1 export 'default' per page
export default function(){
    console.log("I am the default calculate export")
}