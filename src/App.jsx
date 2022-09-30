import { React } from 'react';
import Header from './Header/Header';
import firebase from './utils/firebase';
import appCheck from './utils/appCheck';
import BookList from './BookList/BookList';

export default function App() {
  const app = firebase()
  appCheck(app)
  return (
    <>
      <Header />
      <BookList />
    </>
  );
}
