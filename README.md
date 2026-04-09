# Inventory POS

This is a simple inventory point‑of‑sale (POS) web application for **Express Workshop**. 
The app uses **Firebase Firestore** as its database and is designed to be easy to deploy as a static site (for example via Vercel). 
It displays a list of inventory items and allows users to add new items and delete existing ones in real time.

## Setup

1. Create a Firebase project (if you don’t have one already) and enable the **Firestore** database. 
2. In the Firebase console, go to your project’s settings and find the **Firebase SDK configuration** (apiKey, authDomain, projectId, etc.). 
3. Copy those values into `firebaseConfig.js` in the `firebaseConfig` object. 
4. Deploy the app as a static site (e.g. with Vercel or any other hosting provider).

## Running locally

To test the app locally, simply open `index.html` in your browser. 
You don’t need any build process since all dependencies are pulled from Firebase’s CDN.

## Features

* List all items in the Firestore `items` collection and update the UI in real time when the collection changes.
* Add new items with a name, quantity, and price.
* Delete items from the collection.

## Security note

This demo app does not implement user authentication or authorization. 
For production use, configure Firebase rules appropriately and integrate user authentication if required.
