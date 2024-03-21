import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import {usePlayTrack} from './trackService';
import {State} from 'react-native-track-player';

const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const rotationAnimation = useRef(new Animated.Value(0)).current;
  
  const rotateImage = () => {
    Animated.loop(
      Animated.timing(rotationAnimation, {
        toValue: 1,
        duration: 15000,
        useNativeDriver: true,
      }),
    ).start();
  };

  useEffect(() => {
    rotateImage();
  }, []);

  useEffect(() => {
    
  }, []);
  const updateCurrentTime = () => {
    setInterval(() => {
      setCurrentTime(currentTime => currentTime + 0.5);
    }, 1000);
  };

  useEffect(() => {
    updateCurrentTime();
  }, []);

  useEffect(() => {
    setDuration(songs[0]?.duration || 0);
  }, [songs]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const songs = [
    {
      id: 1,
      title: ' CHIỀU HÔM ẤY ',
      artist: 'JayKii',
      artwork:
        'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/covers/0/d/0d1fe0b30a319e56dce058a2b30f37d7_1503588020.jpg',
      url: require('./../../../assets/music/chieuhomay.mp3'),
      duration: 347,
    },
    {
      id: 2,
      title: 'SUÝT NỮA THÌ',
      artist: ' ANDIEZ x BITIS HUNTER ',
      artwork:
        'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/c/2/4/7/c2475264a30999a45a3c8bcf0e5f090d.jpg',
      url: require('./../../../assets/music/suytnuathi.mp3'),
      duration: 347,
    },
    {
      id: 3,
      title: 'CHÀNG TRAI BẤT TỬ',
      artist: ' An Vũ · Sino ',
      artwork:
        'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/6/5/6/e/656ed01c7604230fd6c9fc894dfa012d.jpg',
      url: require('./../../../assets/music/changtraibattu.mp3'),
      duration: 347,
    },
  ];

  const {
    onTogglePlayTrack,
    onSkipToNext,
    onSkipToPrevious,
    playBackState,
    trackArtist,
    trackTitle,
    trackArtwork,
  } = usePlayTrack(songs);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#006699', '#CC33FF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <View style={styles.containerimagemusic}>
          <Animated.Image
            style={[
              styles.imgaemusic,
              {
                transform: [
                  {
                    rotate: rotationAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}
            source={
              trackArtwork
                ? {uri: trackArtwork}
                : require('../../../assets/image/sach1.jpg')
            }
          />
          <Text style={styles.musicname}>{trackTitle}</Text>
          <Text style={styles.lyricsmucsic}>{trackArtist}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            value={currentTime}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
            onValueChange={value => setCurrentTime(value)}
          />
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
            <Text style={styles.timeText}>{formatTime(duration)}</Text>
          </View>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity>
            <Image source={require('../../../assets/image/shuffle.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSkipToPrevious()}>
            <Image source={require('../../../assets/image/arrows.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onTogglePlayTrack()}>
            {playBackState == State.Playing ? (
              <Image source={require('../../../assets/image/pause.png')} />
            ) : (
              <Image source={require('../../../assets/image/play2.png')} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onSkipToNext()}>
            <Image source={require('../../../assets/image/arrows_right.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../assets/image/undo.png')} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
  containerimagemusic: {
    marginTop: 70,
    width: '100%',
    alignItems: 'center',
  },
  imgaemusic: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  musicname: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
  },
  lyricsmucsic: {
    fontSize: 16,
    width: 250,
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  slider: {
    width: '80%',
    marginTop: 50,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  timeText: {
    color: 'white',
    fontSize: 14,
  },
  controls: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 50,
  },
});

export default MusicPlayer;
