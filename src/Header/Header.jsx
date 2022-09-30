import { Stack } from '@chakra-ui/react'
import { React } from 'react'
import AddBookModel from '../AddBookModal/AddBookModal'

export default function Header() {
  return (
    <Stack direction='row' spacing={4} align='right' justify='right'>
      <AddBookModel/>
    </Stack>
  )
}
