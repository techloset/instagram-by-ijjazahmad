import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../../constants/globalStyle';
import {Colors} from '../../constants/colors';
import {
  BookMark,
  Comment,
  HeartIcon,
  Telegram,
  ThreeDots,
} from '../../constants/images';
import { FeedPostProps } from '../../constants/allTypes';

export default function FeedPost({description, uri}: FeedPostProps) {
  return (
    <>
      <View>
        <Text
          style={[
            styles.fontM,
            styles.fontWeightM,
            styles.lineHightFirst,
            styles.SpacingSm,
            {color: Colors.textclr, margin: 5},
          ]}>
          {description}
        </Text>
        <Image source={{uri}} style={{width: 375, height: 375}} />
      </View>
      <View
        style={[
          styles.flexRow,
          styles.horizantalyBetween,
          styles.horizantalyCenter,
          {padding: 13},
        ]}>
        <View
          style={[
            styles.flexRow,
            styles.horizantalyCenter,
            {gap: 17, flexGrow: 1},
          ]}>
          <HeartIcon width="22" height="22" />
          <Comment width="22" height="22" />
          <Telegram width="22" height="22" />
        </View>
        <View style={{flexGrow: 2}}>
          <ThreeDots />
        </View>
        <View>
          <BookMark width="22" height="22" />
        </View>
      </View>
    </>
  );
}
