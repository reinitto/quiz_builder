import React from 'react';
//({ name, questions })
class Quiz extends React.Component {
  state = {
    name: '',
    questions: []
  };
  async componentDidMount() {
    let res = await fetch(`/getquiz/${this.props.match.params.id}`);
    const data = await res.json();
    console.log(data);
    this.setState({
      name: data.name,
      questions: data.questions
    });
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>{this.state.name}</h1>
        {this.state.questions.length > 0 &&
          this.state.questions.map(q => (
            <div>
              <h4>{q.question}</h4>
              <ul>
                <li>{q.correct_answer}</li>
                {q.other_answers.map(o => (
                  <li>{o}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    );
  }
}

export default Quiz;
