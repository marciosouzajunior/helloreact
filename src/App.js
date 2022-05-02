import * as React from 'react';

// executed only once
var aux = 'test';

function getGreetingMessage() {

  const d = new Date();
  let hour = d.getHours();

  if (hour >= 0 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour <= 18) {
    return 'Good afternoon';
  } else {
    return 'Good night';
  }

}

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {

  // executed everytime function executes
  var message = {
    first: 'Hello',
    second: 'World!'
  };

  return (
    <div>

      <h1>{message.first} {message.second}</h1>
      <h3>{getGreetingMessage()}</h3>

      <hr />

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      {/* lets render a list*/}
      <ul>
        {
          list.map(function (item) {
            return (
              <li key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}, </a>
                </span>
                <span>{item.author}</span>
              </li>
            );
          })
        }
      </ul>

    </div>
  );
}

export default App;
