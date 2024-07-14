// Dom Tree

// const rootNode = document.getRootNode();
// console.log(rootNode);
// console.log(rootNode.childNodes);  // NodeList [html]
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.dir(htmlElementNode);
// console.log(htmlElementNode.childNodes);  // NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = headElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

// Parent Node
// console.log(headElementNode.parentNode);

// siblings nodes relation
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling);
// console.log(headElementNode.nextElementSibling);

// console.log(headElementNode.childNodes);  // NodeList(5) [text, title, text, script, text]



// To change color and background color of parentNode from traversing through childNode.
// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";


// const body = document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";


// const head = document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title");
// console.log(title);
// console.log(title.childNodes);



// we don't want to print text or free space:
const container = document.querySelector(".container");
console.log(container.children);  // HTMLCollection(2) [h1, p]