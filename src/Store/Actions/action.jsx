// src/actions/itemActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

export const addNewItem = createAsyncThunk('items/addNewItem', async (itemData, { dispatch }) => {
  try {
    const { itemImage, itemName, itemPrice, itemQuantity } = itemData;

    // Upload item image to Firebase Storage
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`item_images/${itemImage.name}`);
    const snapshot = await imageRef.put(itemImage);
    const imageUrl = await snapshot.ref.getDownloadURL();

    // Add item data to Firestore
    const db = firebase.firestore();
    const itemsRef = db.collection('items');
    const newItem = {
      itemName,
      itemPrice,
      itemQuantity,
      imageUrl,
    };

    await itemsRef.add(newItem);

    // Dispatch the addItem action to update the Redux store
    dispatch(addItem(newItem));
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
});
