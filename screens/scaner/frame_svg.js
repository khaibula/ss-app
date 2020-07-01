import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg
    width={180}
    height={180}
    viewBox="0 0 100 100"
    style={{
      background: 'red',
    }}
    {...props}
  >
    <Path
      d="M2 32V22Q2 2 22 2h10M68 2h10q20 0 20 20v10M98 68v10q0 20-20 20H68M32 98H22Q2 98 2 78V68"
      fill="transparent"
      strokeWidth={3}
      strokeLinecap="round"
      stroke="#FFF"
    />
  </Svg>
)

export default SvgComponent
