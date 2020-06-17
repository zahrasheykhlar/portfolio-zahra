import React from 'react';

export default class PortfolioCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', description: '', language:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
  const field = event.target.name;
    this.setState({[field]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title + ' '+ this.state.description + ' '+ this.state.language);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
              <label>
          Description:
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
         <label>
          Pick your favorite programming language:
          <select name="language" value={this.state.language} onChange={this.handleChange}>
            <option value="javascript">Javascript</option>
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="c#">C#</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}