import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
  Box,
  Spacer,
  Link,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
} from "@chakra-ui/icons";
import { logo } from "../svg";

export default function navbar() {

  return (
    <Box
      position="fixed"
      bg="brand.magenta"
      width="100%"
      height="80px"
      transition="all 0.5s ease-in-out"
      zIndex="10"
      d="flex"
      alignItems="center"
      justify="space-between"
      pl="4rem"
      pr="4rem"
    >
      <Box h="100" w="100" top="15%" left="0" pos="absolute">
        {logo}
      </Box>
      <Spacer />

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          _focus={{ boxShadow: "none" }}
          w="10"
          h="10"
        />
        <MenuList>
          <MenuItem>
            <Link href="/" _active={{color: 'purple'}}>
              <Text color="brand.black" fontSize="1.5rem" p=".5rem" textDecoration="none" _hover={{ textDecoration: 'none' }}>Home</Text>
              
            </Link>
          </MenuItem>
          <MenuItem>
          <Link to="/index/#about">
          <Text color="brand.black" fontSize="1.5rem" p=".5rem" textDecoration="none" _hover={{ textDecoration: 'none' }}>About</Text>
          </Link>
          </MenuItem>
          <MenuItem>
          <Link href="/support">
          <Text color="brand.black" fontSize="1.5rem" p=".5rem" textDecoration="none" _hover={{ textDecoration: 'none' }}>Gift</Text>
          </Link>
          </MenuItem>
          <MenuItem>
          <Link href="/events">
          <Text color="brand.black" fontSize="1.5rem" p=".5rem" textDecoration="none" _hover={{ textDecoration: 'none' }}>Event</Text>
          </Link>
          </MenuItem>
          <MenuItem>
          <Link href="/rsvp">
          <Text color="brand.black" fontSize="1.5rem" p=".5rem" textDecoration="none" _hover={{ textDecoration: 'none' }}>RSVP</Text>
          </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
