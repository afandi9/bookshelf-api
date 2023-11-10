const { 
    addbookHandler,
    getAllBooksHandler,
    getBooksByIdHandler,
    editbooksByIdHandler,
    deletebooksByIdHandler,
 } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addbookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editbooksByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deletebooksByIdHandler,
    },
  ];
   
  module.exports = routes;