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
    const { label } = this.props;
    return (
    
      <FormGroup>
        <Label>{label}</Label>
        <div className="input-group">
          <DatePicker
            className = "form-control"
            selected={this.state.dateValue}
            onChange={this.handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            maxDate = {moment()}
            dropdownMode = "select"
          />
        </div>
      </FormGroup>
    );
  }
}