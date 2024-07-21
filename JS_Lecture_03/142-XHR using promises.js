const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            } else {
                reject(new Error("Invalid ...SOmething went wrong"));
            }
        }
        xhr.onerror = function(){
            reject(new Error("Invalid ...SOmething went wrong"));
        };

        xhr.send();
    })
}

// const whatIsThis = sendRequest("GET", URL);
// console.log(whatIsThis);

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data);
        return data; // if we don't return data here, then in next ".then()" the output will show "undefined".
    })
    .then(data => {
        // console.log(data);
        // console.log(data[3]);
        // console.log(data[3].id);
        const id = data[3].id;
        return id;
    })
    .then(id => {
        // console.log(id);
        const url = `${URL}/${id}`;
        // console.log(url);
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        // console.log(newResponse);
        const newData = JSON.parse(newResponse);
        console.log(newResponse);
    })
    .catch(error => {
        console.log(error);
    })
