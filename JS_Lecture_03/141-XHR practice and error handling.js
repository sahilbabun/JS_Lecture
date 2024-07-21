const URL = "https://jsonplaceholder.typicode.com/posts";

// jab response acchha na aaye to isme kaise error handle karna hai
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
    // const data = JSON.parse(xhr.response);
    // console.log(data);
    if(xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        // const id = data[3];
        const id = data[3].id; // if u want only id.
        // console.log(id);
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }
    else {
        console.log("Something went wrong!!!!");
    }
}

// agar aap kisi network related error ko handle karna chhate hai, to yaha hum use karenge "onerror" property:
xhr.onerror = () => {
    console.log("Network error");
}
xhr.send();