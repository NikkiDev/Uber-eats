import React from "react";
import styled from "styled-components";

const Txt = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "Uber-Bold";
      case "Medium":
        return "Uber-Medium";
      case "Regular":
        return "Uber-Regular";
      case "Light":
        return "Uber-Light";
    }
  }};
  font-size: ${({ size }) => (size ? size : 16)}px;
`;

const Text = ({ children, type = "Regular", size, ...otherProps }) => (
  <Txt type={type} size={size} {...otherProps}>
    {children}
  </Txt>
);

export default Text;
