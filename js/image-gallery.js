function setup() {
  // Write your code here.
  const buttons = document.getElementsByClassName("remove");
  for (let btn of buttons) {
    btn.addEventListener('click', () => {
      btn.parentElement.remove();
    });
  }
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3xXPxPR" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/4de3sQr" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);