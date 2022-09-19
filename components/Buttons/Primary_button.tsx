import React from "react";
import styles from "./styles.module.css";
// import { BsPersonCircle } from "react-icons/Bs";
import {
  Button,
  chakra,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import { BsPersonCircle } from "react-icons/bs";
type Props = {
  title: string;
  handleClick: () => void;
};

export default function Primary_button({ title }: Props) {
  const { user, error, isLoading } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {user ? (
        <>
          <chakra.button
            onClick={onOpen}
            zIndex="1"
            className={user ? styles.container2 : styles.container}
          >
            {user.picture ? (
              <Image
                borderRadius={"100%"}
                src={
                  "https://lh3.googleusercontent.com/a-/AFdZucqDX4g4ByahbCizVJ1fcJbeGXQE9QrAn8Jfnc3cUg=s96-c"
                }
                maxH="100%"
                maxW="100%"
                alt="userimage"
                fontSize={"10px"}
              />
            ) : (
              <BsPersonCircle data-testid="signedInIcon" />
            )}
          </chakra.button>
          <BasicUsage
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            user={user}
          />
        </>
      ) : (
        <chakra.a
          textAlign={"center"}
          href="/api/auth/login"
          zIndex="1"
          className={user ? styles.container2 : styles.container}
        >
          {title}
        </chakra.a>
      )}
    </>
  );
}

type basicProps = {
  isOpen: any;
  onOpen: () => void;
  onClose: () => void;
  user: {
    email?: string;
    eamil_verified?: boolean;
    family_name?: string;
    given_name?: string;
    locale?: string;
    name?: string;
    nickname?: string;
    picture?: string;
    sid?: string;
    sub?: string;
    updated_at?: string;
  };
};

function BasicUsage({ isOpen, onOpen, onClose, user }: basicProps | any) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hey {user ? user.given_name : ""}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Would you like to logout ?</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <chakra.a href="/api/auth/logout">
              <Button variant="ghost">Logout</Button>
            </chakra.a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
