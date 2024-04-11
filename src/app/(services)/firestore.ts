import { firestoreDb } from './firebase'

import {
  collection,
  deleteField,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  QuerySnapshot,
  increment
} from 'firebase/firestore'

const USERS_PATH = 'evacare_users'

export const firestoreListener = onSnapshot
export const deleteDbField = deleteField()/**
* Represents the result of a query operation.
*/
interface QueryDataResult {
 data: DocumentData[];
 docs: DocumentSnapshot<DocumentData>[];
}

/**
* Retrieves documents based on a given query.
* @param {any} query - The query to execute.
* @returns {Promise<QueryDataResult>} A promise that resolves with the query data result.
*/
const getDocuments = (query) => {
 return getDocs(query).then((docs) => {
   return { data: formatQueryDataArray(docs), docs: docs.docs };
 });
};

/**
* Formats the array of query data.
* @param {QuerySnapshot<DocumentData>} docs - The query snapshot.
* @returns {DocumentData[]} The formatted query data array.
*/
const formatQueryDataArray = (docs) => {
 // Implement your formatting logic here
 // For now, returning the data as-is
 return docs.docs.map((doc) => doc.data());
};

// Database functions
const usersRef = collection(firestoreDb, USERS_PATH);

/**
* Retrieves all users.
* @returns {Promise<QueryDataResult>} A promise that resolves with the query data result.
*/
export const getAllUsers = () => {
 return getDocuments(query(usersRef));
};

/**
* Creates a new user document.
* @param {Object} payload - The user data payload.
* @param {string} payload.uid - The user ID.
* @param {any} payload.data - The user data.
* @param {Function} navigateCallback - The callback function to navigate after the user is created.
*/
export const createNewUser = (payload, navigateCallback) => {
 const userRef = doc(firestoreDb, USERS_PATH, payload.uid); // Define userRef here

 setDoc(userRef, payload.data)
   .then(() => {
     // Document set successfully
     console.log('Document set successfully');
     navigateCallback();
   })
   .catch((error) => {
     // Handle errors if the document set fails
     console.error('Error setting document:', error);
   });
};

/**
* Updates user details.
* @param {Object} payload - The user data payload.
* @param {string} payload.uid - The user ID.
* @param {any} payload.data - The user data.
* @returns {Promise<void>} A promise that resolves when the operation is complete.
*/
export const updateUserDetails = async (payload) => {
 const userRef = doc(firestoreDb, USERS_PATH, payload.uid); // Define userRef here

 try {
   await updateDoc(userRef, payload.data);
 } catch (error) {
   console.error('Error updating user details:', error.message);
 }
};

/**
* Creates a record for an anonymous user.
* @param {string} uid - The user ID.
*/
export const createAnonUserRecord = async (uid) => {
 const userRef = doc(firestoreDb, USERS_PATH, uid);

 try {
   await setDoc(userRef, {
     messagesCount: 0,
   });

   console.log('User record created in Firestore:', uid);
 } catch (error) {
   console.error('Error creating user record:', error);
 }
};

/**
* Increments the message count for a user.
* @param {string} uid - The user ID.
*/
export const incrementMessageCount = async (uid) => {
 const userRef = doc(firestoreDb, USERS_PATH, uid);
 try {
   await updateDoc(userRef, {
     messagesCount: increment(1),
   });

   console.log('Message count incremented for user:', uid);
 } catch (error) {
   console.error('Error incrementing message count:', error);
 }
};

/**
* Watches for changes in the message count for a user.
* @param {string} uid - The user ID.
* @param {Function} onMessagesChange - The callback function to handle changes in the message count.
* @returns {Function} A function to unsubscribe from the snapshot listener.
*/
export const watchUserMessages = (uid, onMessagesChange) => {
 const userRef = doc(firestoreDb, USERS_PATH, uid);

 const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
   const messagesCount = docSnapshot.data()?.messagesCount || 0;
   onMessagesChange(messagesCount);
 });

 return unsubscribe;
};
