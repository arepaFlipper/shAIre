import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_ENDPOINT,
  platform: process.env.EXPO_PUBLIC_PLATFORM,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_DATABASE_ID,
  userCollectionId: process.env.EXPO_PUBLIC_USER_COLLECTION_ID,
  videoCollectionId: process.env.EXPO_PUBLIC_VIDEO_COLLECTION_ID,
  storageId: process.env.EXPO_PUBLIC_STORAGE_ID
};

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId,
} = appwriteConfig;

// NOTE: Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
  ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  // NOTE: Register User
  try {
    const newAccount = await account.create(ID.unique(), email, password, username);

    if (!newAccount) throw Error;

    const avatarUrl = await avatars.getInitials(username);
    console.log(`🚊%cappwrite.js:34 - avatarUrl`, 'font-weight:bold; background:2088960000;color:#fff;'); //DELETEME:
    console.log(avatarUrl); // DELETEME:

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      { accountId: newAccount.$id, email, username, avatar: avatarUrl }
    );
    console.log(`🚐%cappwrite.js:43 - newUser`, 'font-weight:bold; background:2356346880;color:#fff;'); //DELETEME:
    console.log(newUser); // DELETEME:
    return newUser;
  } catch (error) {
    console.log(`🏵️%cappwrite.js:36 - error`, 'font-weight:bold; background:2155806720;color:#fff;'); //DELETEME:
    console.log(error); // DELETEME:
    throw new Error(error);
  }
}

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log(`🖍️%cappwrite.js:56 - session`, 'font-weight:bold; background:2657157120;color:#fff;'); //DELETEME:
    console.log(session); // DELETEME:
    return session;

  } catch (error) {
    console.log(`🫀%cappwrite.js:57 - error`, 'font-weight:bold; background:2673868800;color:#fff;'); //DELETEME:
    console.log(error); // DELETEME:
    throw new Error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    );

    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(`🎮%cappwrite.js:85 - error`, 'font-weight:bold; background:3074949120;color:#fff;'); //DELETEME:
    console.log(error); // DELETEME:
    return { error: "There was an issue " }
  }
}

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId);
    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}
