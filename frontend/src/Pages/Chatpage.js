import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { ChatState } from '../components/Context/ChatProvider'
import SearchButton from '../components/Chats/SearchButton';
import ChatContects from '../components/Chats/ChatContects';
import ChatBox from '../components/Chats/ChatBox';

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState();
  return (
    <div style={{width: "100%"}}>
      {
        user && <SearchButton />
      }
      <Box display='flex' justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <ChatContects fetchAgain={fetchAgain} />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>
    </div>
  )
}

export default Chatpage