function endangeredSpecies(continent) {
  // Your code goes here
  const target = document.querySelector(`[data-continent=\"${continent}\"]`);
  return target.textContent;
}

// Example case
document.body.innerHTML =
`<div>
    <ul>
        <li data-continent="North America">California condor</li>
        <li data-continent="Europe">Cave bear</li>
    </ul>
</div>`;

console.log(endangeredSpecies("North America")); // should print 'California condor'