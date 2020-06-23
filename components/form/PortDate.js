import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import { FormGroup, Label } from 'reactstrap';


export default class PortDate extends React.Component {
  state = {
    dateValue: moment()
  };

  handleChange = date => {
    const formattedDate = date.format();
    this.setState({
      dateValue: date
    });
  };

  render() {
    return (
      <FormGroup>
        <DatePicker
          selected={this.state.dateValue}
          onChange={this.handleChange}
        />
      </FormGroup>
    );
  }
}