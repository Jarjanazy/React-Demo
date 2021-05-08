import { FaSun, FaMoon } from 'react-icons/fa';
import {IconButton, useColorMode} from '@chakra-ui/react'

const ModeToggleButton = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <IconButton 
            icon={colorMode === "light" ? <FaSun/> : <FaMoon/>} 
            isRound={true} 
            size="lg" 
            alignSelf="flex-end"
            onClick={toggleColorMode}
          />
    );
}

export default ModeToggleButton;