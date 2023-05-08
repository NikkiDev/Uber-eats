import React from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components/native";

const Container = styled(Modalize)``;

const BottomSheet = ({ bottomSheetRef, children, modalHeight }) => {
  return (
    <Container ref={bottomSheetRef} modalHeight={modalHeight}>
      {children}
    </Container>
  );
};

export default BottomSheet;
