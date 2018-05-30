import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p> <input type="text" name="userName" placeholder="Введите ваше имя" /> </p>
          <p> <input type="text" name="title" placeholder="Введите название поста" /> </p>
          <p><textarea type="text" name="massage" placeholder="Введите текст"/></p>
          <p><button>
              Отправить
          </button></p>

      </div>
    );
  }
}

export default App;
