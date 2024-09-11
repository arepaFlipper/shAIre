import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import FormField from '../../components/FormField';
import { Video } from 'expo-av';
import CustomButton from '../../components/CustomButton';

const Create = () => {

  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    video: null,
    thumbnail: null,
    prompt: '',
  })

  const submit = () => { }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">Upload video</Text>

        <FormField
          title="Video Tittle"
          value={form.title}
          placeholder="Give your video a catch title..."
          handleCnahgeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <View className="mt-7 space-y-2">
          <Text clasName="text-base text-gray-100 font-pmedium">Upload Video</Text>
          Thumbnail Image
          <TouchableOpacity>
            {(form.video ?
              (
                <Video source={{ uri: form.video.uri }} className="w-full h-64 rounded-2xl" useNativeControls resizeMode={ResizeMode.COVER} isLooping />
              ) : (
                <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                  <View className="w-14 h-14 border-dashed border secondary-100 justify-center items-center">
                    <Image source={icons.upload} resizeMode="contain" className="w-1/2 h-1/2" />
                  </View>
                </View>
              )
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Thumbnail Image
          </Text>

          <TouchableOpacity>
            {(form.thumbnail ?
              (
                <Image source={{ uri: form.thumbnail.uri }} resizeMode="cover" clasName="w-full h-64 rounded-2xl" />
              ) : (
                <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border border-black-200 flex-row space-x-2">
                  <Image source={icons.upload} resizeMode="contain" className="w-5 h-5" />
                  <Text className="text-sm text-gray-100 font-pmedium">Choose a file</Text>
                </View>
              )
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="AI Prompt"
          value={form.title}
          placeholder="The prompt you used to create this video"
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles="mt-7"
        />

        <CustomButton title="Submit & Publish" handlePress={submit} containerStyles="mt-7" isLoading={uploading} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Create
