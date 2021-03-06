import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Flex } from "@chakra-ui/react"

import Navbar from '../layout/navbar/navbar.layout';
import Routes from '../../routes/routes';
 
const Main = () => {
    return ( 
        <Flex h='100vh'>
            <Router>
                <Navbar />
                <Box direction='column' w='100%' h='100%' overflow='auto'>
                    <Routes />
                </Box>
            </Router>
        </Flex>
     );
}
 
export default Main;