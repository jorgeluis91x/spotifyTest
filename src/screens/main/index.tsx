import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import Text from '../../components/text';
import {useTypedSelector} from '../../hooks/use-typed-selector';
import {getPlaylists, getProfile} from '../../redux/app';
import {
  Container,
  ContainerProfile,
  ContainerInfo,
  ContainerFollowers,
  TransparentButton,
  PlaylistsContainer,
  Playlist,
  ImagePlaylist,
} from './style';
import {ThemeContext} from '../../theme';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function MainScreen() {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const profile = useTypedSelector((state) => state.app.profile);
  const playlists = useTypedSelector((state) => state.app.playlists);
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getPlaylists());
  }, []);

  return (
    <Container>
      <ContainerProfile>
        <ContainerFollowers>
          <Text
            alignSelf={'center'}
            style={{textAlign: 'center'}}
            size={theme.fontSize.h1 + 10}
            fontFamily={'bold'}
            color={theme.colors.white}>
            {profile?.followers?.total || '0'}
          </Text>
          <Text
            alignSelf={'center'}
            size={theme.fontSize.h5}
            fontFamily={'bold'}>
            {'Followers'}
          </Text>
        </ContainerFollowers>
        <ContainerInfo>
          <TransparentButton>
            <Text
              size={theme.fontSize.h4}
              color={theme.colors.primaryColor}
              alignSelf={'center'}>
              {profile.product}
            </Text>
          </TransparentButton>
          <Text
            size={theme.fontSize.h3}
            fontFamily={'bold'}
            color={theme.colors.white}>
            {profile?.display_name || ''}
          </Text>
          <Text size={theme.fontSize.h3} fontFamily={'bold'}>
            {profile?.email || ''}
          </Text>
        </ContainerInfo>
      </ContainerProfile>
      <Text
        color={theme.colors.white}
        size={theme.fontSize.h1}
        marginVertical={15}
        alignSelf={'center'}
        fontFamily={'bold'}>
        Playlist
      </Text>
      <PlaylistsContainer>
        {playlists?.map((item) => {
          return (
            <Playlist>
              <ImagePlaylist source={{uri: item.images[0].url}} />
              <Text
                alignSelf={'center'}
                size={theme.fontSize.h3 + 2}
                color={theme.colors.secondaryText}
                marginVertical={10}>
                {item.name}
              </Text>
            </Playlist>
          );
        })}
      </PlaylistsContainer>
    </Container>
  );
}
export default MainScreen;
