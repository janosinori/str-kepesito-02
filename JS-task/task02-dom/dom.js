const bookList = [
    { title: 'Don Quixote', isRead: true, author: 'Miguel de Cervantes' },
    { title: 'Lord of the Rings', isRead: false, author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerers Stone', isRead: true, author: ' J.K. Rowling' },
    { title: 'And Then There Were None', isRead: true, author: 'Agatha Christie' },
    { title: 'Alices Adventures in Wonderland', isRead: false, author: 'Lewis Carroll' },
    { title: 'The Lion, the Witch, and the Wardrobe', isRead: true, author: 'C.S. Lewis' },
    { title: 'Love in the Time of Cholera', isRead: true, author: 'Gabriel García Márquez' },
]

function listMyBooks(bookList) {
    const ul = document.querySelector('ul#container');
    let liElementList = document.querySelectorAll('ul#container li');
    for(let liElem of liElementList){liElem.remove()};
    
    for(let book of bookList){
        const li = document.createElement('li');
        ul.appendChild(li);
        const textnode = document.createTextNode((book.isRead ? ' ' : '') + book.title);
        li.appendChild(textnode);
        if(book.isRead){
            const strong = document.createElement('strong');
            strong.textContent = 'Ezt a könyvet már olvastad:';
            li.insertBefore(strong,textnode);
        }
    }
    configStyle();
}

function configStyle() {
    const section = document.querySelector('section');
    const div = document.querySelector('div');
    const p = document.querySelector('p');
    section.style.border = '3px solid red';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    p.style.textAlign = 'center';
    p.style.color = 'red';
}

export { listMyBooks, configStyle };
