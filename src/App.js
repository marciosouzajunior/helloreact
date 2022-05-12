import * as React from 'react';

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

const App = () => {

  var message = {
    first: 'Hello',
    second: 'World!'
  };

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredStories = stories.filter(function (item) {
    return item.title.includes(searchTerm);
  });

  return (
    <div>

      <h1>{message.first} {message.second}</h1>
      <h3>{getGreetingMessage()}</h3>

      <hr />
      <Search onSearchChange={handleChange} />

      <hr />
      <List list={filteredStories} />

    </div>
  );
}

const List = (props) =>
(
  <ul>
    {
      props.list.map((item) => {
        return (
          <Item key={item.objectID} item={item} />
        );
      })
    }
  </ul>
);

function Item(props) {
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}, </a>
      </span>
      <span>{props.item.author}</span>
    </li>
  );
}

function Search(props) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearchChange} />
    </div>
  );
}

export default App;
