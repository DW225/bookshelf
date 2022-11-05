import { React } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Header from './Header/Header';
import { appCheck } from './utils/firebase';
import BookList from './containers/BookList';

export default function App() {
  appCheck()
  return (
    <Grid templateAreas={`"header"
                          "main"`}
    >
      <GridItem area='header'>
        <Header />
      </GridItem>
      <GridItem area='main'>
        <BookList />
      </GridItem>
    </Grid>
  );
}
