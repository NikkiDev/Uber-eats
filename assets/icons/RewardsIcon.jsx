import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function RewardsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={12} fill="#000" />
      <Path
        d="M12 4l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L12 15.056l-4.702 3.416 1.796-5.528-4.702-3.416h5.812L12 4z"
        fill="#fff"
      />
    </Svg>
  );
}

export default RewardsIcon;
