import React from 'react';

import {StyledText} from './style';

type TextProps = {

  fontFamily?: 'regular' | 'bold' | 'medium' | 'italic';

  opacity?: number;

  size?: number;

  color?: string;

  alignSelf?: string;

  marginHorizontal?: number;

  marginVertical?: number;

  children: JSX.Element | JSX.Element[] | string;
};

function Text(props: TextProps) {
  return (
    <StyledText
      fontFamily={props.fontFamily}
      opacity={props.opacity}
      size={props.size}
      color={props.color}
      alignSelf={props.alignSelf}
      marginHorizontal={props.marginHorizontal}
      marginVertical={props.marginVertical}>
      {props.children}
    </StyledText>
  );
}

Text.defaultProps = {
  fontFamily: 'normal',
  opacity: 1,
  marginHorizontal: 0,
  marginVertical: 0,
  alignSelf: 'flex-start',
};

export default Text;
