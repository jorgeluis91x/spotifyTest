import Text from '../../components/text';
import {styled} from '../../theme';

export const Container = styled.View`
    flex:1
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding: 15px;
`;

export const ContainerProfile = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const ContainerFollowers = styled.View`
  flex: 1;
`;
export const ContainerInfo = styled.View`
  flex: 2;
`;

export const TransparentButton = styled.TouchableOpacity`
  border-color: ${(props) => props.theme.colors.primaryColor};
  border-width: 1px;
  border-radius: 5px;
  padding-vertical: 3px;
  margin-vertical: 5px;
  width: 80px;
  justify-content: center;
`;
export const PlaylistsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-vertical: 10px;
  align-items: flex-start;
`;
export const Playlist = styled.TouchableOpacity`
width: 50%
justify-content: center;
border-color: white;
padding: 20px;
align-items: center;
`;

export const ImagePlaylist = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;
