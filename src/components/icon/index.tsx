import * as React from 'react';
import { useTheme } from 'styled-components';
import { StyledIcon } from './styles';

interface props {
  name: string;
  color?: string;
  className?: string;
  size?: string;
}

const Icon = React.memo<props>(({ size = '1.5em', color, name, className = '', ...otherProps }) => {
  const { textColor } = useTheme();

  return (
    <StyledIcon className={`icon-${name} ${className}`} size={size} color={color || textColor} {...otherProps} />
  );
});

export default Icon;
