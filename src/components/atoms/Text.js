import React from "react";
import styled from "styled-components";

const Txt = styled.Text``;

const Text = ({ children, type, ...otherProps }) => (
  <Txt type={type} {...otherProps}>
    {children}
  </Txt>
);

export default Text;
