// XHR (XML HTTP Request)


const URL = "https://jsonplaceholder.typicode.com/posts";
// way to create a XMLHttpRequest
const xhr = new XMLHttpRequest();
// console.log(xhr); isko use krke apne request ko configure karna padega

// step 1: By using open() method
// open() method 2-chize lega parameter mei
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
        // console.log(xhr);
        // console.log(xhr.response);
        // console.log(typeof xhr.response); // it gives output: string
        // while checking typeof its shows string, now we have to change this in JS Object,then we do this:
//         const response = xhr.response; // iss respnse(JSON) ko parse krna hai, isko JS Object banana hai, by using parse():
//         const data = JSON.parse(response);
        // console.log(data);
//         console.log(typeof data); // Now it showing output : object.
//     }
// } // ye func change tn hogi jb readyState change hoga.

// ye onload function tabhi chalega jb readyState ki value 4 ho jayegi
xhr.onload = function(){
    // console.log(xhr.readyState);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();
