import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Pressable } from "react-native";
function BackIcon({ onPress, ...props }) {
  return (
    <Pressable onPress={onPress}>
      <Svg
        width={22}
        height={18}
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M21.042 10.5H4.687l5.73 7.5H6.77L0 9l6.77-9h3.647l-5.73 7.5h16.355v3z"
          fill="#000"
        />
      </Svg>
    </Pressable>
  );
}

export default BackIcon;
