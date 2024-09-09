import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants/';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import { getAllPosts } from '../../lib/appwrite';

const Home = () => {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getAllPosts();
        setData(response);
      } catch (error) {
        Alert.alert('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [])

  console.log(`💓%chome.jsx:32 - data`, 'font-weight:bold; background:#788700;color:#fff;'); //DELETEME:
  console.log(data); // DELETEME:

  const onRefresh = async () => {
    setRefresh(true);
    // NOTE: re-call videos -> if any new videos appeard
    setRefresh(false);
  }
  return (
    <SafeAreaView className="bg-primary border-2 border-red-500 h-full">
      <FlatList
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Text className="text-3xl text-white">{item.id}</Text>)}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                <Text className="text-2xl font-psemiblod text-white">arepa_flipper</Text>
              </View>
              <View className="mt-1.5">
                <Image source={images.logoSmall} className="w-9 h-10" resizeMode='contain' />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-1 pb-1">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => {
          return (
            <EmptyState title="No Videos Found" subtitle="No videos created yet, be the first one to upload one" />
          )
        }}
        refreshControl={<RefreshControl refresing={refresh} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Home
