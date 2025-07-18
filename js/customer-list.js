function showCustomers(customers, targetList) {
  // Your code goes here
  customers.forEach((v) => {
    const node = document.createElement("li");

    const nameDOM = document.createElement("p");
    nameDOM.textContent = v.name;

    node.appendChild(nameDOM);
    targetList.appendChild(node);

    const emailDOM = document.createElement("p");
    emailDOM.textContent = v.email;

    nameDOM.addEventListener("click", () => {
      const currPs = node.getElementsByTagName("p");
      if (currPs.length === 1) {
        node.appendChild(emailDOM);
      }
      else {
        currPs[1].remove();
      }
    })
  })
}

document.body.innerHTML = `
<div>
  <ul id="customers">
  </ul>
</div>
`;
let customers = [{name: "John", email: "john@example.com"},
                 {name: "Mary", email: "mary@example.com"}];
showCustomers(customers, document.getElementById("customers"));

let customerParagraph = document.querySelectorAll("li > p")[0];
if(customerParagraph) {
  customerParagraph.click();
}
console.log(document.body.innerHTML);