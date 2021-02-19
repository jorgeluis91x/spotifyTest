import React, {useContext} from 'react';
import {PrimaryButton} from '../../screens/main/style';
import {ThemeContext} from '../../theme';
import Text from '../text';

import {ImageTrack, TrackContainer, InfoTrack, Row} from './style';

type TrackProps = {
  urlImage: string;
  title: string;
  singer: string;
  onPress: Function;
};

function Track(props: TrackProps) {
  const theme = useContext(ThemeContext);
  return (
    <TrackContainer onPress={() => props.onPress()}>
      <Row>
        <ImageTrack source={{uri: props.urlImage}} />
        <InfoTrack>
          <Text color={theme.colors.white} fontFamily={'bold'}>
            {props.title}
          </Text>
          <Text marginVertical={4}>{props.singer}</Text>
        </InfoTrack>
      </Row>
      <PrimaryButton onPress={() => props.onPress()}>
        <Text
          fontFamily={'bold'}
          size={theme.fontSize.h4}
          color={theme.colors.white}
          alignSelf={'center'}>
          Play
        </Text>
      </PrimaryButton>
    </TrackContainer>
  );
}

Track.defaultProps = {
  fontFamily: 'normal',
  opacity: 1,
  marginHorizontal: 0,
  marginVertical: 0,
  alignSelf: 'flex-start',
};

export default Track;
