function initialize() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      let self = event.target.parentElement;
      let neighbor;

      switch (event.target.className) {
        case "downButton":
          // getNext
          neighbor = self.nextElementSibling;
          break;
        case "upButton":
          // getPrev
          neighbor = self.previousElementSibling;
          break;
      }

      // swap span
      let selfSpan = self.getElementsByTagName("span")[0];
      let otherSpan = neighbor.getElementsByTagName("span")[0];

      let tmp = selfSpan.innerText;
      selfSpan.innerText = otherSpan.innerText;
      otherSpan.innerText = tmp;
    });
  });
}

document.body.innerHTML = `
<div>
    <span>Prepare presentation</span>
    <button class="downButton" type="button">&darr;</button>
</div>
<div>
    <span>Read emails</span>
    <button class="downButton" type="button">&darr;</button>
    <button class="upButton" type="button">&uarr;</button></div>
<div>
    <span>Monthly report</span>
    <button class="upButton" type="button">&uarr;</button>
</div>`;

initialize();

document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();

console.log(document.body.innerHTML);