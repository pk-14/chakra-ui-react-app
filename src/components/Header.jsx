import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme={"purple"}
        padding={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VITUBE</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button
                colorScheme={"purple"}
                variant={"ghost"}
                onClick={onClose}
              >
                <Link to={"/"}>Home</Link>
              </Button>
              <Button
                colorScheme={"purple"}
                variant={"ghost"}
                onClick={onClose}
              >
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button
                colorScheme={"purple"}
                variant={"ghost"}
                onClick={onClose}
              >
                <Link to={"/videos?category=free"}>Free Videos</Link>
              </Button>
              <Button
                colorScheme={"purple"}
                variant={"ghost"}
                onClick={onClose}
              >
                <Link to={"/upload"}>Upload a Video</Link>
              </Button>
            </VStack>

            <HStack
              position={"absolute"}
              bottom={"10"}
              left={"0"}
              w={"full"}
              justifyContent={"space-evenly"}
            >
              <Button colorScheme={"purple"} onClick={onClose}>
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button
                colorScheme={"purple"}
                variant={"outline"}
                onClick={onClose}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
