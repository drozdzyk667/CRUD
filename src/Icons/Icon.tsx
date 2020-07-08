import * as React from 'react';
import { SvgIconProps } from '@material-ui/core';
import * as muiIcons from './mui.constants';

export type IconName = keyof typeof muiIcons;

interface IconProps extends SvgIconProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = React.forwardRef(
  ({ name, ...iconProps }, ref) => {
    const Icon = muiIcons[name];
    return <Icon ref={ref} {...iconProps} />;
  }
);

export default Icon;
