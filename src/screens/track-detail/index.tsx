import React, {useContext} from 'react';
import Text from '../../components/text';
import {Container, ImageTrack} from './style';
import {ThemeContext} from '../../theme';

function TrackDetailScreen({route}) {
  const {track} = route.params;
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ImageTrack source={{uri: track.album.images[0].url}} />
      <Text
        size={theme.fontSize.h1}
        color={'white'}
        fontFamily={'bold'}
        marginHorizontal={25}
        marginVertical={5}>
        {track.name}
      </Text>
      <Text size={theme.fontSize.h3} marginHorizontal={25}>
        {track.artists[0].name}
      </Text>
    </Container>
  );
}
export default TrackDetailScreen;
