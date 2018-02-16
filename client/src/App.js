import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

axios({method: 'get', url: '/api'}) //testing ajax connection
  .then((res) => {console.log(res.data) })


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: null,
      answers: []
    }
  }

  componentDidMount() {
    axios({method: 'get', url: '/api/questions'}) 
      .then((res) => {
        console.log(this.state)
        this.setState({
          questions: res.data.question,
          answers: res.data.answers
        })    
      })
  }

  addAnswer(evt) {
    evt.preventDefault()
    console.log('done')
    console.log(this.state)
    this.setState({
      answers: [...this.state.answers, this.refs.addAnswer.value]
    })
    this.refs.addAnswer.value = " "
  }

  render() {
    // var firstQuestion = null
    // var firstAnswers = []
    // if(this.state.questions !== null) {
    //   if(this.state.questions[0]) {
    //     firstQuestion = this.state.questions[0].question
    //     firstAnswers = this.state.questions[0].answers
    //   }
    // }
    return (
      <div className="App">
        Welcome to React
        <h2>{this.state.questions}</h2>
        <ul> 
          {this.state.answers.map((a, i) => {
            return <li key={i}>{a}</li>
          })}
        </ul>
        <form onSubmit={this.addAnswer.bind(this)}>
        <input  type="text" placeholder="add item" ref="addAnswer" />
        </form>
      </div>
    );
  }
}

export default App;
