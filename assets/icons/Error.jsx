import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Error = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <Path
      d="M10 0a10 10 0 1 0 10 10A10.016 10.016 0 0 0 10 0Zm3.36 12.3a.754.754 0 0 1 0 1.06.748.748 0 0 1-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 0 1-1.06 0 .754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3A.75.75 0 0 1 7.7 6.64l2.3 2.3 2.3-2.3a.75.75 0 0 1 1.06 1.06l-2.3 2.3Z"
      fill="#fff"
    />
  </Svg>
);

export default Error;
