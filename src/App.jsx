import { React } from 'react';
import Header from './Header/Header';
import { firebase, appCheck } from './utils/firebase';
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
