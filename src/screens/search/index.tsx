import React, {useContext, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Text from '../../components/text';
import {useTypedSelector} from '../../hooks/use-typed-selector';
import {getSearchTracks} from '../../redux/app';
import {Container} from '../main/style';

import {TracksContainer} from './style';

import {ThemeContext} from '../../theme';
import Track from '../../components/track';

function SearchScreen({route, navigation}) {
  const {query} = route.params;
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const searchResult = useTypedSelector((state) => state.app.searchResult);
  useEffect(() => {
    dispatch(getSearchTracks({query}));
  }, [dispatch, query]);

  return (
    <Container>
      <Text
        color={theme.colors.white}
        size={theme.fontSize.h1}
        marginVertical={15}
        alignSelf={'center'}
        fontFamily={'bold'}>
        Result
      </Text>
      <TracksContainer>
        {searchResult?.map((item) => {
          return (
            <Track
              urlImage={item.album?.images[0].url}
              title={item.name}
              singer={item.artists[0].name}
              onPress={() => navigation.navigate('TrackDetail', {track: item})}
            />
          );
        })}
      </TracksContainer>
    </Container>
  );
}
export default SearchScreen;
