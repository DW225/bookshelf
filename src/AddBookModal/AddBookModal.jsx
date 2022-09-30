import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { React, useRef, useState } from 'react'
import { Book } from '../constant/bookSchema'
import saveToFirebase from '../utils/saveToFirebase'
import { capitalizeFirstLetter } from '../utils/utils'

export default function AddBookModel() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [book, setBook] = useState(Book)

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const handleChange = (newValue, key) => {
    book[key] = newValue
    setBook(book)
  }

  const save = () => {
    saveToFirebase(book)
    onClose()
  }

  const addAnother = () => {
    saveToFirebase(book)
  }

  return (
    <>
      <Button colorScheme='teal' variant='ghost' onClick={onOpen}>
        Add Book
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book to Bookshelf</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {Object.keys(Book).map(key => (
              <FormControl key={key}>
                <FormLabel>{capitalizeFirstLetter(key)}</FormLabel>
                <Input
                  placeholder={Book[key]}
                  onChange={e => handleChange(e.target.value, key)}
                />
              </FormControl>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={save}>
              Add
            </Button>
            <Button colorScheme='blue' mr={3} onClick={addAnother}>
              Add another
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
