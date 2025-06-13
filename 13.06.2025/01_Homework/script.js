// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.URL);

// console.log(document.querySelector('#current').parentNode.parentElement);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').parentElement);

for (let node of document.body.childNodes) {
  if (node.nodeName === '#text' || node.nodeType === Node.COMMENT_NODE) {
    continue;
  }
  console.log(node);
}
