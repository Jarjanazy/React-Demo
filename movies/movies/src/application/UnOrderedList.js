import {UnorderedList, ListItem, Text, VStack} from '@chakra-ui/react'

const UnOrderedListFromString = ({title, listAsString}) => {
    

    return (
        <VStack>
            <Text fontSize="3xl"> {title} </Text>
            <UnorderedList>
                {listAsString.split(',').map((e) => {
                    return <ListItem> {e} </ListItem>
                })}
            </UnorderedList>
        </VStack>
    );
}

export default UnOrderedListFromString;