import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Success = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <Path
      d="M10 0a10 10 0 1 0 10 10A10.016 10.016 0 0 0 10 0Zm4.78 7.7-5.67 5.67a.748.748 0 0 1-1.06 0l-2.83-2.83a.75.75 0 1 1 1.06-1.06l2.3 2.3 5.14-5.14a.75.75 0 0 1 1.06 1.06Z"
      fill="#fff"
    />
  </Svg>
);

export default Success;
