import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../../components/SearchInput';
import EmptyState from '../../components/EmptyState';
import { searchPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';
import VideoCard from '../../components/VideoCard';
import { useLocalSearchParams } from 'expo-router';

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query])

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
          <View className="my-6 px-4 space-y-6">
            <Text className="font-pmedium text-sm text-gray-100">Search Results</Text>
            <Text className="text-2xl font-psemiblod text-white">{query}</Text>
            <View className="mt-6 mb-8">
              <SearchInput initialQuery={query} />
            </View>
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

export default Search;
