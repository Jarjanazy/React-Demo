import {VStack} from '@chakra-ui/react';
import {LinkIcon} from '@chakra-ui/icons';

const Stack = ({state}) => {
    return (
    <VStack>
        {Array(state.blockCount).fill(1).map(i => <LinkIcon>HEY 1</LinkIcon>)}
    </VStack>
    );
}

export default Stack;