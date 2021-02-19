import React, {useContext, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Text from '../../components/text';
import {useTypedSelector} from '../../hooks/use-typed-selector';
import {getPlaylistInfo} from '../../redux/app';
import {
  Container,
  ContainerProfile,
  ContainerInfo,
  ContainerFollowers,
} from '../main/style';

import {ImagePlaylist, TracksContainer} from './style';

import {ThemeContext} from '../../theme';
import Track from '../../components/track';

function PlaylistScreen({route, navigation}) {
  const {playlist} = route.params;
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const playlistSelected = useTypedSelector(
    (state) => state.app.playlistSelected,
  );
  useEffect(() => {
    dispatch(getPlaylistInfo({id: playlist.id}));
  }, [dispatch, playlist.id]);

  return (
    <Container>
      <ContainerProfile>
        <ContainerFollowers>
          <ImagePlaylist source={{uri: playlist.images[0].url}} />
          <Text
            marginVertical={10}
            color={theme.colors.primaryColor}
            alignSelf={'center'}
            size={theme.fontSize.h5}
            fontFamily={'bold'}>
            {playlist.tracks.total + ' Tracks'}
          </Text>
        </ContainerFollowers>
        <ContainerInfo>
          <Text
            size={theme.fontSize.h3}
            fontFamily={'bold'}
            color={theme.colors.white}>
            {playlist.name}
          </Text>
          <Text
            marginVertical={10}
            size={theme.fontSize.h4}
            color={theme.colors.primayText}>
            {playlist.description}
          </Text>
        </ContainerInfo>
      </ContainerProfile>
      <Text
        color={theme.colors.white}
        size={theme.fontSize.h1}
        marginVertical={15}
        alignSelf={'center'}
        fontFamily={'bold'}>
        Tracks
      </Text>
      <TracksContainer>
        {playlistSelected.tracks?.items?.map((item) => {
          return (
            <Track
              urlImage={item.track.album?.images[0].url}
              title={item.track.name}
              singer={item.track.artists[0].name}
              onPress={() =>
                navigation.navigate('TrackDetail', {track: item.track})
              }
            />
          );
        })}
      </TracksContainer>
    </Container>
  );
}
export default PlaylistScreen;
