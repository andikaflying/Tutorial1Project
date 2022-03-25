import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const VideoPage = () => {
  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <Text>My video project!</Text>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        }}
        style={{
          width: 300,
          height: 300,
        }}
        controls={true}
        fullscreen={true}
        poster="https://st3.depositphotos.com/3356953/13947/v/600/depositphotos_139474006-stock-illustration-crazy-smiley-sign.jpg" 
      />
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({});
