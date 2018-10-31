import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
        valueTextArea: 'Please write an essay about your favorite DOM element.',
        valueSelect: 'coconut',
        valueMultiSelect: ['coconut']
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChangeSelect = this.handleChangeSelect.bind(this);
      this.handleChangeMultiSelect = this.handleChangeMultiSelect.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  // modify or validate user input in the handler
    handleChange(event) {
      this.setState({value: event.target.value.toUpperCase()});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      alert('Text Area: ' + this.state.valueTextArea);
      alert('Select: ' + this.state.valueSelect);
      alert('Select: ' + this.state.valueMultiSelect);
    }
    
    handleChange1(event) {
        this.setState({valueTextArea: event.target.value});
      }

      handleChangeSelect(event) {
        this.setState({valueSelect: event.target.value});
      }
      handleChangeMultiSelect(event) {
        //   when already selected
          if (this.state.valueMultiSelect.includes(event.target.value)) {
            this.setState({
                valueMultiSelect: this.state.valueMultiSelect.filter(function(ele){
                        return ele != event.target.value;
                    })
            });
          } else {
            //   when not selected
            this.setState({valueMultiSelect: this.state.valueMultiSelect.concat(event.target.value)});
          }
      }
   
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/><br/><br/>
          <label>
          Essay:
          <textarea value={this.state.valueTextArea} onChange={this.handleChange1} />
        </label>
        <br/><br/><br/>
        <label>
          Pick your favorite flavor:
          <select value={this.state.valueSelect} onChange={this.handleChangeSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/><br/><br/>
        <label>
          Pick your favorite flavor:
          <select multiple={true} value={this.state.valueMultiSelect} onChange={this.handleChangeMultiSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/><br/><br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

ReactDOM.render(<NameForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
