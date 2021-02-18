import React from 'react';

import {StyledText} from './style';

type TextProps = {
  /** tipo de fuente del texto*/
  fontFamily?: 'regular' | 'bold' | 'medium' | 'italic';

  /** opacidad de texto*/
  opacity?: number;

  /** tamañño de texto*/
  size?: number;

  /** color de texto*/
  color?: string;

  /** Alinear*/
  alignSelf?: string;

  /** margen horizontal*/
  marginHorizontal?: number;

  /** margen vertical*/
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
