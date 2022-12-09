const BookListItem = (book) => {
  let html = `<li
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-red-500 last:border-b-0 border-b border-red-300 cursor-pointer" value="${book.id}">
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};
