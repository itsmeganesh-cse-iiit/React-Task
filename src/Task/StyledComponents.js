import styled, { css } from "styled-components";

export const Heading = styled.div`
  margin: auto;
  width: 50%;
`;
export const EventsContainer = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
export const DisplayContainer = styled.div`
  padding: 10px;
`;

export const CountContainer = styled.div`
  padding: 10px;
`;

export const CustomButton = styled.button`
  margin: 5px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

export const CountBox = styled.span`
  margin: 5px;
  width: 10px;
  color: white;
  padding: 2px;
  font-weight: bold;
  ${props =>
    props.borderTop &&
    css`
      border-top: 5px solid orange;
    `}
`;

export const FontChanger = styled.span`
  font-size: ${props => props.fontSize}pt;
`;
