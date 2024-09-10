import { Image, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useRef } from 'react'
import * as Animatable from 'react-native-animatable';
import { icons } from '../constants';
import { Video, ResizeMode } from 'expo-av';

const zoomIn = { 0: { scale: 0.8 }, 1: { scale: 1 } };

const zoomOut = { 0: { scale: 1 }, 1: { scale: 0.8 } };

const TrendingItem = ({ item, activeItem }) => {
  const [play, setPlay] = useState(false)
  const video_ref = useRef(null);
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          ref={video_ref}
          source={{ uri: 'https://cdn.pixabay.com/video/2020/06/06/41263-429379223_large.mp4' }}
          className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            console.log(`🛹%cTrending.jsx:29 - status`, 'font-weight:bold; background:#718e00;color:#fff;'); //DELETEME:
            console.log(status); // DELETEME:
            setPlay(() => status);
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => {
        return item.$id
      }}
      renderItem={({ item }) => {
        return <TrendingItem activeItem={activeItem} item={item} />
      }}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170 }}
    />
  );
};

export default Trending;
