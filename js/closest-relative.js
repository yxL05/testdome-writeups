/**
 * @param {HTMLElement} parent The HTML element of the parent
 * @param {string} relativeName The name of relative to be searched
 * @return {HTMLElement} The HTML element of the closest relative
 */
function closestRelative(parent, relativeName) {
  const queue = [...parent.childNodes];

  while (queue.length > 0) {
    let curr = queue.shift();

    if (curr.tagName === relativeName.toUpperCase()) return curr;

    queue.push(...curr.childNodes);
  }

  return null;
}

// Example case
document.body.innerHTML = 
'<James>' +
  '<Dave></Dave>' +
  '<Mike></Mike>' +
  '<Sarah></Sarah>' +
'</James>';

let parent = document.getElementsByTagName('James')[0];
let relative = closestRelative(parent, 'Mike');
console.log(relative && relative.tagName); // prints MIKE