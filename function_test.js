const greet = (name) => {
    if(typeof name !== "string" )return `Please enter a valid name ,${name} is not supported.`
    return `Hi, greetings ${name}, very appreciation your contribute for my test repository.`
}

console.log(greet("Banana bread"))