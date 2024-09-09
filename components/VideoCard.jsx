import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';

const VideoCard = ({ item: { video, thumbnail, creator, title, users: { avatar } } }) => {
  const [play, setPlay] = useState(false);
  console.log(`🍅%cVideoCard.jsx:7 - avatar`, 'font-weight:bold; background:#25da00;color:#fff;'); //DELETEME:
  console.log(avatar); // DELETEME:
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image source={{ uri: avatar }} className="w-full h-full rounded-lg" resizeMode='cover' />
          </View>

          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white font-psemibold text-sm" numberOfLines={1}>{title}</Text>
            <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>{creator}</Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {(play) ? (
        <Text className="text-2xl text-white">Playing</Text>
      ) : (
        <TouchableOpacity className="w-full h-60 rounded-xl mt-3 relative justify-center items-center" activeOpacity={0.7} onPress={() => setPlay(true)}>
          <Image source={{ uri: thumbnail }} className="w-full h-full rounded-xl mt-3" resizeMode="cover" />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default VideoCard
