import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const ImageDisplay = ({ link, index, handleRemove }) => {
  const remove = () => {
    handleRemove(index);
  }

  return (
    <div class="image">
      <img src={link} />
      <button class="remove" onClick={remove}>X</button>
    </div>
  )
}

const ImageGallery = ({ links }) => {
  const [imageLinks, setImageLinks] = useState(links);

  const handleRemove = (index) => {
    setImageLinks(imageLinks.filter((_, i) => (i !== index)));
  }

  return (
    <div>
      {
        imageLinks.map((link, i) => (
          <ImageDisplay key={i} link={link} index={i} handleRemove={handleRemove} />
        ))
      }
    </div>
  );
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
const links = ["https://bit.ly/3xXPxPR", "https://bit.ly/4de3sQr"];
const root = createRoot(rootElement);
root.render(<ImageGallery links={ links } />);

setTimeout(() => {
  document.querySelectorAll('.remove')[0]?.click();
  setTimeout(() => {
    console.log(rootElement?.innerHTML);
  });
});