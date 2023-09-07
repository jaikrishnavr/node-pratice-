const user = function(data){
    return `${data} is logged in`;
}

let id = function(id){
    return `${id} this my id`
}

let email = function(email){
    return `${email} is my email id`
}

//export module as object
module.exports = {
user,
id,
email
};