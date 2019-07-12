import React, { Component } from "react";
import {
  Heading,
  EventsContainer,
  DisplayContainer,
  CountContainer,
  CustomButton,
  CountButton,
  FontChanger
} from "./StyledComponents";
class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterArr: [1, 2, 3, 4, 5, 6],
      countVal:10
    };
  }


  handleAddEvent=()=>{
    alert("Add Event Fired");
  }
  handleRemoveEvent=()=>{   
    alert("Remove Triggered")
  }

  render() {
    return (
      <React.Fragment>
        <Heading>
          <h1>Start Building</h1>
        </Heading>
        <EventsContainer>
          <CustomButton color="white" backgroundColor="green" onClick={this.handleAddEvent}>
            Add Box
          </CustomButton>
          <CustomButton color="white" backgroundColor="red" onClick={this.handleRemoveEvent}>
            Remove Box
          </CustomButton>
        </EventsContainer>
        <DisplayContainer>
          {this.state.counterArr.map(eachBtn => (
            <CountButton>{eachBtn}</CountButton>
          ))}
        </DisplayContainer>
        <CountContainer>
        <FontChanger fontSize={this.state.countVal}>{this.state.countVal}</FontChanger>
        </CountContainer>
      </React.Fragment>
    );
  }
}

export default Task;
