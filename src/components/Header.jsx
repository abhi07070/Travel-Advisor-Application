import { Box } from '@chakra-ui/react';
import { Flex, InputGroup, InputRightElement, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { Rating } from '@mui/material';
import { Autocomplete } from '@react-google-maps/api';
import { BiChevronDown, BiHotel, BiMapAlt, BiRestaurant, BiSearch, BiStar , BiCalendar} from 'react-icons/bi';

const Header = ({ setType, setRatings, setCoordinates }) => {
    return (
        <Flex
            position={"absolute"}
            top={0}
            left={0}
            width={"full"}
            px={4}
            py={2}
            zIndex={101}
        >
            <Flex>
                {/* <Autocomplete> */}

                {/* </Autocomplete> */}

                <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={10}
                >
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        px={4}
                        py={2}
                        bg={"white"}
                        rounded={"full"}
                        ml={4}
                        shadow="lg"
                        cursor={"pointer"}
                        _hover={{ bg: "gray.100" }}
                        transition={"ease-in-out"}
                        transitionDuration={"0.3s"}
                    >
                        <Menu>
                            <BiCalendar fontSize={25} />
                            <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                                Enter Dates
                            </MenuButton>
                        </Menu>
                    </Flex>
                    <InputGroup width={'55vw'} shadow='lg' rounded='xl'>
                        <InputRightElement
                            pointerEvents={'none'}
                            children={<BiSearch color='gray' fontSize={20} />}
                        />
                        <Input
                            type={'text'}
                            placeholder='Where to ?'
                            variant={'filled'}
                            fontSize={18}
                            bg={'white'}
                            color={'gray.700'}
                            _hover={{ bg: 'whiteAlpha.800' }}
                            _focus={{ bg: 'whiteAlpha.800' }}
                            _placeholder={{ color: '' }}
                        />
                    </InputGroup>
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        px={4}
                        py={2}
                        bg={"white"}
                        rounded={"full"}
                        ml={4}
                        shadow="lg"
                        cursor={"pointer"}
                        _hover={{ bg: "gray.100" }}
                        transition={"ease-in-out"}
                        transitionDuration={"0.3s"}
                    >
                        <Menu>
                            <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                                Filters
                            </MenuButton>
                        </Menu>
                    </Flex>
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        px={4}
                        py={2}
                        bg={"white"}
                        rounded={"full"}
                        shadow="lg"
                        cursor={"pointer"}
                        _hover={{ bg: "gray.100" }}
                        transition={"ease-in-out"}
                        transitionDuration={"0.3s"}
                    >
                        <Menu>
                            <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                                Attractions
                            </MenuButton>
                            <BiChevronDown fontSize={25} />
                            <MenuList>
                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setRatings("")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                                        All Rating
                                    </Text>
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setRatings(2)}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        2.0
                                    </Text>

                                    {/* <Rating size="small" value={2} readOnly /> */}
                                </MenuItem>

                                {/* <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setRatings(3)}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        3.0
                                    </Text>

                                    <Rating size="small" value={3} readOnly />
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setRatings(4)}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        4.0
                                    </Text>

                                    <Rating size="small" value={4} readOnly />
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setRatings(5)}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        4.5
                                    </Text>

                                    <Rating size="small" value={5} readOnly />
                                </MenuItem> */}
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header
