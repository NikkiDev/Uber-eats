import * as React from "react";
import Svg, { Path } from "react-native-svg";

function OffersIcon(props) {
  return (
    <Svg
      width={21}
      height={22}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.277 21.667L20.111 10V.278h-9.028L.25 11.945l9.027 9.722z"
        fill="#000"
      />
    </Svg>
  );
}

export default OffersIcon;
