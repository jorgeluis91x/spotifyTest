import React, {useContext, useEffect, useState} from 'react';
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
  SearchInput,
  PrimaryButton,
} from './style';
import {ThemeContext} from '../../theme';
import {TextInput} from 'react-native-gesture-handler';

function MainScreen({navigation}) {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const profile = useTypedSelector((state) => state.app.profile);
  const playlists = useTypedSelector((state) => state.app.playlists);
  const [searchValue, setSearchValue] = useState('');
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
        size={theme.fontSize.h2 + 5}
        marginVertical={15}>
        {'Find the best music \nfor your banger'}
      </Text>
      <ContainerProfile>
        <SearchInput>
          <TextInput
            style={{color: 'white'}}
            placeholderTextColor={theme.colors.white + '80'}
            selectionColor={theme.colors.white + '80'}
            value={searchValue}
            onChangeText={(text) => {
              setSearchValue(text);
            }}
            placeholder={'search'}
          />
        </SearchInput>
        <PrimaryButton
          onPress={() => navigation.navigate('Search', {query: searchValue})}>
          <Text
            fontFamily={'bold'}
            size={theme.fontSize.h4}
            color={theme.colors.white}
            alignSelf={'center'}>
            Search
          </Text>
        </PrimaryButton>
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
            <Playlist
              onPress={() => {
                navigation.navigate('Playlist', {playlist: item});
              }}>
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
