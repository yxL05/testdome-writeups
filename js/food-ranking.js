function setup() {
  // Write your code here
  function swap(list, self, neighbor, direction) {
    if (!neighbor) return;

    const [top, bot] = (direction === "down") ? [self, neighbor] : [neighbor, self];
    bot.remove();
    list.insertBefore(bot, top);
  }

  const buttons = Array.from(document.getElementsByClassName("up"));
  buttons.push(...document.getElementsByClassName("down"))

  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      let neighbor;

      switch (btn.className) {
        case "up":
          neighbor = parent.previousElementSibling;
          break;
        case "down":
          neighbor = parent.nextElementSibling;
          break;
      }
      swap(parent.parentElement, parent, neighbor, btn.className);
    })
  }
}

// Example case
document.body.innerHTML = `<ol>
  <li><button class="up">Up!</button>Taco<button class="down">Down!</button></li>
  <li><button class="up">Up!</button>Pizza<button class="down">Down!</button></li>
  <li><button class="up">Up!</button>Eggs<button class="down">Down!</button></li>
</ol>`;

setup();
document.getElementsByTagName('button')[2].click();

console.log(document.body.innerHTML);