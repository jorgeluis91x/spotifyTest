import {styled} from '../../theme';

export const Container = styled.ScrollView`
    flex:1
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding-vertical: 25px;
    padding-horizontal: 10px;
`;

export const ImageTrack = styled.Image`
  width: 340px;
  height: 340px;
  border-radius: 20px;
  align-self: center;
  margin-vertical: 20px;
`;
