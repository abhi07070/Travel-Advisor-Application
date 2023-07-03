import { Box } from '@chakra-ui/react';
import { Flex, InputGroup, InputRightElement, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';

import { Autocomplete } from '@react-google-maps/api';

import { BiChevronDown, BiMapAlt, BiSearch, BiStar } from 'react-icons/bi';
import { Rating } from "@material-ui/lab";
import { useState } from 'react';
// import RangeSlider from './RangeSlider';

const Header = ({ setType, setDistance, setCoordinates }) => {

    const [autocomplete, setAutocomplete] = useState(null);
    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });
    };

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
                        shadow="lg"
                        cursor={"pointer"}
                        _hover={{ bg: "gray.100" }}
                        transition={"ease-in-out"}
                        transitionDuration={"0.3s"}
                    >
                        <Menu>
                            <BiMapAlt fontSize={25} />
                            <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                                All Distance
                            </MenuButton>

                            <MenuList>
                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setDistance("1")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                                        1km
                                    </Text>
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setDistance("2")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        2km
                                    </Text>
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setDistance("3")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        3km
                                    </Text>

                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setDistance("4")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        4km
                                    </Text>
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setDistance("5")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        5km
                                    </Text>

                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <BiChevronDown fontSize={25} />
                    </Flex>
                    <Flex>
                        {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
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
                        {/* </Autocomplete> */}
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
                            <BiStar fontSize={25} />
                            <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                                Choose ratings
                            </MenuButton>

                            <MenuList>
                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setDistance("")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                                        All Rating
                                    </Text>
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setDistance("2.0")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        2.0
                                    </Text>

                                    <Rating size="small" value={2} readOnly />
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setDistance("3.0")}
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
                                    onClick={() => setDistance("4.0")}
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
                                    onClick={() => setDistance("5.0")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                                        5.0
                                    </Text>

                                    <Rating size="small" value={5} readOnly />
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <BiChevronDown fontSize={25} />
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
                                    onClick={() => setType("attractions")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                                        Attractive Places
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setType("restaurants")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                                        Restaurants
                                    </Text>
                                </MenuItem>

                                <MenuItem
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent="space-around"
                                    onClick={() => setType("hotels")}
                                >
                                    <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                                        Hotels
                                    </Text>

                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header
