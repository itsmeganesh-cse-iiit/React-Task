import React, { Component } from "react";
import {
  Heading,
  EventsContainer,
  DisplayContainer,
  CountContainer,
  CustomButton,
  CountBox,
  FontChanger
} from "./StyledComponents";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterArr: [],
      countVal: 0
    };
  }

  handleAddEvent = () => {
    let newNumber = this.state.counterArr.length + 1;
    let tmpArr = [...this.state.counterArr, newNumber];
    this.setState({
      counterArr: tmpArr,
      countVal: newNumber
    });
  };
  handleRemoveEvent = () => {
    if (this.state.counterArr.length > 0) {
      this.state.counterArr.pop();
      let tmpArr = this.state.counterArr;
      this.setState({
        counterArr: tmpArr,
        countVal: tmpArr.length
      });
    } else {
      alert("No more boxes to remove..!!!");
    }
  };

  handleEvent = event => {
    switch (event) {
      case "add":
        this.handleAddEvent();
        break;
      case "remove":
        this.handleRemoveEvent();
        break;
      default:
        console.log("working in background");
    }
  };
  checkIndexIsEven(n) {
    return n % 2 === 0;
  }

  render() {
    const { counterArr, countVal } = this.state;
    return (
      <React.Fragment>
        <Heading>
          <h1>Start Building</h1>
        </Heading>
        <EventsContainer>
          <CustomButton
            color="white"
            backgroundColor="green"
            onClick={() => this.handleEvent("add")}
          >
            Add Box
          </CustomButton>
          <CustomButton
            color="white"
            backgroundColor="red"
            onClick={() => this.handleEvent("remove")}
          >
            Remove Box
          </CustomButton>
        </EventsContainer>
        <DisplayContainer>
          {counterArr.map(eachBtn =>
            eachBtn % 5 === 0 ? (
              <CountBox
                key={eachBtn}
                borderTop="true"
                style={{
                  backgroundColor: this.checkIndexIsEven(eachBtn)
                    ? "black"
                    : "blue"
                }}
              >
                {eachBtn}
              </CountBox>
            ) : (
              <CountBox
                key={eachBtn}
                style={{
                  backgroundColor: this.checkIndexIsEven(eachBtn)
                    ? "black"
                    : "blue"
                }}
              >
                {eachBtn}
              </CountBox>
            )
          )}
        </DisplayContainer>
        <CountContainer>
          <FontChanger fontSize={countVal}>{countVal}</FontChanger>
        </CountContainer>
      </React.Fragment>
    );
  }
}

export default Task;
