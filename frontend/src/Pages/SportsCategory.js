import { AbsoluteCenter, Box, Button, Container, Divider, FormControl, FormLabel, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom'

const SportsCategory = () => {
  const [pic, setPic] = useState();
  const [sportName, SetSportName] = useState();
  const [picLoading, setPicLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const submitHandler = async () => {
    setPicLoading(true);
    if (!pic || !sportName) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(
        "https://chatapp-0l1a.onrender.com/api/sportsCategory",
        {
          sportName,
          pic
        },
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      setPic('');
      SetSportName(null);
      history.push("/sportCategory");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const formData = new FormData();
      formData.append("file", pics);
      formData.append("upload_preset", "y7y2uhud")
      formData.append("cloud_name", "dn9vn1yuj")
      fetch("https://api.cloudinary.com/v1_1/dn9vn1yuj/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };
  return (
    <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">Add Category</Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <FormControl isRequired>
          <FormLabel>Sport Name</FormLabel>
          <Input placeholder='Sport Name' onChange={(e) => SetSportName(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Image Link</FormLabel>
          <Input placeholder='Image Link' value={pic} onChange={(e)=>setPic(e.target.value)}/>
        </FormControl>
        <Box position='relative' padding='10'>
          <Divider />
          <AbsoluteCenter bg='white' px='4'>
            Or
          </AbsoluteCenter>
        </Box>
        <FormControl id="pic">
        <FormLabel>Upload Sports Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          isLoading={picLoading}
        >
        Add Sports Category
      </Button>
        </Box>
    </Container>
  )
}

export default SportsCategory