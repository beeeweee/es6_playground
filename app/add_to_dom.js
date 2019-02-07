export default function(tagName, text){
    const newTag = document.createElement(tagName);
    newTag.innerText = text;
    document.getElementById('root').appendChild(newTag);

};

// export default;
//doesnt need a name
//export allows us to use anywhere in the file system

//if it can be stored in a variable, it can be stored into another file