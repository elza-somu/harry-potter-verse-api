const express =require('express');
const app = express();
const cors = require('cors');
const { request, response } = require('express');

const PORT = 8000;

app.use(cors())

let books = {
  "the philosopher's stone":{
    'title':"Harry Potter and the Philosopher's Stone",
    'ISBN' : '0-7475-3269-9',
    'year of publication':1997,
    'publisher' : 'Bloomsbury',
    'number of pages' : 223,
    'number of chapters': 17
  },
  "the sorcerer's stone" :{
    'title':"Harry Potter and the Sorcerer's Stone",
    'ISBN':'0590353403',
    'year of publication':1999,
    'publisher' : 'Scholastic',
    'number of pages' : 309,
    'number of chapters': 17
  },
  "the chamber of secrets":{
    'title':'Harry Potter and the Chamber of Secrets',
    'ISBN' : '0-7475-3849-2',
    'year of publication':1998,
    'publisher' : 'Bloomsbury',
    'number of pages' : 251,
    'number of chapters': 18
  },
  "the prisoner of azkaban":{
    'title':'Harry Potter and the Prisoner of Azkaban',
    'ISBN' : '0-7475-4215-5',
    'year of publication':1999,
    'publisher' : 'Bloomsbury',
    'number of pages' : 317,
    'number of chapters': 22
  },
  "the goblet of fire":{
    'title':'Harry Potter and the Goblet of Fire',
    'ISBN' : 	'0-7475-4624-X',
    'year of publication':2000,
    'publisher' : 'Bloomsbury',
    'number of pages' : 636 ,
    'number of chapters': 37
  },
  "the order of the phoenix":{
    'title':'Harry Potter and the Order of the Phoenix',
    'ISBN' : 	'0-7475-5100-6',
    'year of publication':2003,
    'publisher' : 'Bloomsbury',
    'number of pages' : 766,
    'number of chapters': 38
  },
  "the half-blood prince":{
    'title':'Harry Potter and the Half-Blood Prince',
    'ISBN' : 	'0-7475-8108-8',
    'year of publication':2005,
    'publisher' : 'Bloomsbury',
    'number of pages' : 607,
    'number of chapters': 30
  },
  "the deathly hallows":{
    'title':'Harry Potter and the Deathly Hallows',
    'ISBN' : 	'0-545-01022-5',
    'year of publication':2007,
    'publisher' : 'Bloomsbury',
    'number of pages' : 607,
    'number of chapters': 37
  },
  'error':{
    'title' : 'Sorry this is not available in the Database of Witchcraft and Wizardary'
  }
}

app.get('/',(request,response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/books/:bookName', (request,response)=>{
  const bookName = request.params.bookName.toLowerCase();
  if(books[bookName]){
    response.json(books[bookName])

  }else{
    response.json(books['error'])
  }
})

app.listen(process.env.PORT || PORT,()=>{
  console.log(`Server running on ${PORT}`);
})