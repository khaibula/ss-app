import React from 'react'
import Svg, { Circle, Text } from 'react-native-svg';
import transInterval, {cubeFunc} from '../../../../assets/scripts/progfunc.js';
import colors from '../../../../assets/colors.js';

const SvgComponent = props => (
  
  <Svg {...props} 
  viewBox="0 0 200 200"
  >
    <Circle
      r={80}
      cx={100}
      cy={100}
      fill="none"
      strokeWidth={14}
      stroke={colors.mainBg}
    />
    <Circle
      r={80}
      cx={100}
      cy={100}
      fill="none"
      strokeWidth={14}
      stroke={colors.main}
      strokeLinecap="round"
      strokeDasharray={`${cubeFunc(props.num, 100, 502.4)} 502.4`}
      strokeDashoffset={transInterval(-90, 360, 502.4)}
    />
    <Text
      x={props.num>9 ? 100 : 100}
      y={props.num>9 ? 125 : 135}
      fontSize={props.num>9 ? 70 : 100}
      fontWeight="bold"
      textAnchor="middle"
      fill={colors.main}
    >
      {props.num}
    </Text>
  </Svg>
)

export default SvgComponent
