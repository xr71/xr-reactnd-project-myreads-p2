# MyReads Project

This is a front-end React project demo-ing a personal library containing three bookshelves (currently reading, want to read, and read) with a search functionality to add new books to your shelves.  

The starter files are provided by Udacity @ https://github.com/udacity/reactnd-project-myreads-starter.

The project is bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app). 


## To get started with the app right away:

* git clone this repo and then `cd` in to `xr-reactnd-project-myreads`
* install all project dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`
* this will start the app in your default browser or if a default browser does not launch, you can visit the app at `localhost:3000`

## To use the app

* the home page will render three book shelves with some starter books on each shelf
* you have the option to click on the green drop down button on each book and move it to a different shelf (such as moving from `currently reading` to `read` should you have finished this particular book)
* next, you will see a large plus sign green button at the bottom, this will allow you to search for new books
* it is very important here to note that this demo project only has a few set of search terms pre-cached
* to make the search terms readily available to the end user, I have made the input field a searchable drop down of only the allowed terms, this will ensure that you will get search results back on click of a dropdown option
* once a search result returns a set of books, you can navigate it the same way as any book on the homepage, by selecting the down arrow button and moving the selected book to one of your shelves

# From Udacity 

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
