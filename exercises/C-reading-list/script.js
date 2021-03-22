function readingList(books) {
  let imagesArray = ["https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"
    , "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg"
    , "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg"]
  let content = document.querySelector("#content");
  let unorderedListEl = content.appendChild(document.createElement("ul"));
  for (let [index, aBook] of books.entries()) {
    aBook.cover = imagesArray[index];
    let listEl = document.createElement("li");
    unorderedListEl.appendChild(listEl);
    let paraEl = listEl.appendChild(document.createElement("p"));
    let imgEl = listEl.appendChild(document.createElement("img"));
    
    listEl.classList.add('class-list')
   
    paraEl.classList.add('class-text')
    paraEl.textContent = `${aBook.title} - ${aBook.author}`;
    imgEl.src = aBook.cover;
   
    imgEl.classList.add('class-image')
    if (aBook.alreadyRead) {
      listEl.style.backgroundColor = "green";
    }
    else {
      listEl.style.backgroundColor = "red";

    }
  }

}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);