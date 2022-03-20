import { useColorModeValue, useColorMode, Button, Icon} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function ColorMode () {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <Icon as={RiMoonLine} w={5} h={5} /> : <Icon as={RiSunLine} w={5} h={5} />}
        </Button>
    )
}