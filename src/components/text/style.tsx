import {styled} from '../../theme';

type StyledTextProps = {
  /** tipo de fuente del texto*/
  fontFamily?: string;

  /** opacidad de texto*/
  opacity?: number;

  /** tamañño de texto*/
  size?: number;

  /** color de texto*/
  color?: string;

  /** alinear texto*/
  alignSelf?: string;

  /** margen horizontal*/
  marginHorizontal?: number;

  /** margen vertical*/
  marginVertical?: number;
};

export const StyledText = styled.Text<StyledTextProps>`
  font-size: ${(props) =>
    props.size ? props.size : props.theme.fontSize.h4}px;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.primaryText};
  font-weight: ${(props) => (props.fontFamily ? props.fontFamily : 'normal')};
  opacity: ${(props) => (props.opacity ? props.opacity : '1')};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'flex-start')};
  margin-horizontal: ${(props) =>
    props.marginHorizontal ? props.marginHorizontal : '0'}px;
  margin-vertical: ${(props) =>
    props.marginVertical ? props.marginVertical : '0'}px;
`;
