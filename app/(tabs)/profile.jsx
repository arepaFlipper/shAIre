import { View, Text, FlatList, TouchacbleOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../../components/SearchInput';
import EmptyState from '../../components/EmptyState';
import { getUserPosts, signOut } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';
import VideoCard from '../../components/VideoCard';
import { useGlobalContext } from '../../context/GlobalProvider';
import InfoBox from '../../components/InfoBox';
import { icons } from '../../constants/'

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(() => getUserPosts(user.$id));
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace('/sign-in');
  }

  return (
    <SafeAreaView className="bg-primary border-2 border-red-500 h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => {
          return item.$id
        }}
        renderItem={({ item }) => {
          return <VideoCard item={item} />
        }}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchacbleOpacity className="w-full justify-center items-center mt-6 mb-12 px-4">
              <Image source={icons.logout} resizeMode="contain" className="w-6 h-6" onPress={logout} />
              <View className="w-16 h-16 border border-secondary rounded-g justify-center items-center">
                <Image source={{ uri: user?.avatar }} className="w-[90%] h-[90%] rounded-lg" resizeMode='cover' />
                <InfoBox title={user?.username} containerStyles='mt-5' titlteStyles="text-lg" />

                <View className="mt-5 flex-row">
                  <InfoBox title={posts.length || 0} subtitle="Posts" containerStyles='mt-10' titleStyles="text-lg" />
                  <InfoBox title="1.2k" containerStyles='Followers' titlteStyles="text-xl" />
                </View>
              </View>
            </TouchacbleOpacity>
          </View>
        )}
        ListEmptyComponent={() => {
          return (
            <EmptyState title="No Videos Found" subtitle="No videos found for this search query" />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Profile;
