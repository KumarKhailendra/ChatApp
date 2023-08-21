import { 
  // Avatar, 
  Button, HStack, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tag, TagLabel, Text, useDisclosure } from '@chakra-ui/react'

import { ViewIcon } from '@chakra-ui/icons'

const ProfileModel = ({user, children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
        {children ? (<span onClick={onOpen}>{children}</span>) : <IconButton d={{base: "flex"}} icon={<ViewIcon />} onClick={onOpen} />}
        <Modal size={"lg"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader 
            fontSize={"40px"}
            fontFamily={"monospace"}
            display="flex"
            justifyContent={"center"}
          >{user.name}
          </ModalHeader>
          <HStack
            fontFamily={"monospace"}
            display="flex"
            justifyContent={"center"}
          >
            <Tag size='lg' colorScheme='red' borderRadius='full'>
                {/* <Avatar
                    src={cat.pic}
                    size='xs'
                    name='Segun Adebayo'
                    ml={-1}
                    mr={2}
                /> */}
                <TagLabel>{user.interest}</TagLabel>
                </Tag>
          </HStack>
          <ModalCloseButton />
          <ModalBody
          display="flex"
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          >
            <Image 
            borderRadius={"full"}
            boxSize={"150px"}
            src={user.pic}
            alt={user.name}
             />
             <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily={"monospace"}
            >
              Email: {user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant='ghost'>Edit</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModel