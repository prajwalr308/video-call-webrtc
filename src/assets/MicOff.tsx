import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MicOff(props:any) {
  return (
    <Svg viewBox="0 0 12.691 12.691" {...props}>
      <Path d="M0 0h12.691v12.691H0zm0 0h12.691v12.691H0z" fill="none" />
      <Path
        d="M10.062 5.819h-.9a2.607 2.607 0 01-.231 1.087l.654.652a3.431 3.431 0 00.477-1.739zm-2.131.087c0-.029.008-.058.008-.087V2.637a1.593 1.593 0 00-3.185 0v.1zm-5.686-4.33l-.677.673 3.19 3.191v.382a1.589 1.589 0 001.587 1.591 1.638 1.638 0 00.345-.04l.881.88a2.928 2.928 0 01-1.226.273 2.753 2.753 0 01-2.813-2.704h-.9a3.7 3.7 0 003.185 3.564v1.737h1.062V9.384a3.765 3.765 0 001.348-.48l2.222 2.22.677-.674z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default MicOff;