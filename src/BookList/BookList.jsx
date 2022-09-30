import { Table, TableContainer, Th, Thead, Tr } from '@chakra-ui/react'
import { React } from 'react'
import { Book } from '../constant/bookSchema'

export default function BookList() {
  return (
    <TableContainer>
      <Table colorScheme='telegram'>
        <Thead>
          <Tr>
            {Object.keys(Book).map(key => (
              <Th key={key}>{Book[key]}</Th>
            ))}
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  )
}
