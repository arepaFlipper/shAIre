import { Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_ENDPOINT,
  platform: process.env.EXPO_PUBLIC_PLATFORM,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_DATABASE_ID,
  userCollectionId: process.env.EXPO_PUBLIC_USER_COLLECTION_ID,
  videoCollectionId: process.env.EXPO_PUBLIC_VIDEO_COLLECTION_ID,
  storageId: process.env.EXPO_PUBLIC_STORAGE_ID
};

// NOTE: Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
  ;

const account = new Account(client);

export const createUser = () => {
  // NOTE: Register User
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });

}

