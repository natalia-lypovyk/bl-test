import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";
import { useEthers } from "@usedapp/core";

import { IdentIcon } from "../ident-icon";

export const AccountModal = ({ isOpen, onClose }) => {
  const { account, deactivate } = useEthers();

  const deactivateAccount = () => {
    deactivate();
    onClose();
  }

  return (
    <Modal
      isCentered size="md"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />

      <ModalContent
        background="gray.900"
        border="1px"
        borderStyled="solid"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader
          color="white"
          px={4}
          fontSize="lg"
          fontWeight="medium"
        >
          Account
        </ModalHeader>

        <ModalCloseButton
          color="white"
          fontSize="sm"
          _hover={{
            color: "whiteAlpha.700",
          }}
        />

        <ModalBody pt={2} px={4}>
          <Box
            border="1px"
            borderStyled="solid"
            borderColor="gray.600"
            borderRadius="3xl"
            px={5}
            pt={4}
            pb={2}
            mb={3}
          >
            <Flex justifyContent="space-between" alignItems="center" mb={3}>
              <Text color="gray.400" fontSize="sm">
                Connected with MetaMask
              </Text>

              <Button
                onClick={deactivateAccount}
                variant="outline"
                size="sm"
                borderColor="blue.800"
                borderRadius="3xl"
                color="blue.500"
                fontSize="13px"
                fontWeight="normal"
                height="26px"
                px={2}
                _hover={{
                  background: "none",
                  borderColor: "blue.300",
                  textDecoration: "underline",
                }}
              >
                Change
              </Button>
            </Flex>

            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
              <IdentIcon />

              <Text
                color="white"
                fontSize="xl"
                fontWeight="semibold"
                ml={2}
                lineHeight="1.1"
              >
                {account && `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}
              </Text>
            </Flex>

            <Flex alignContent="center" m={3}>
              <Button
                variant="link"
                color="gray.400"
                fontWeight="normal"
                fontSize="sm"
                _hover={{
                  textDecoration: "none",
                  color: "whiteAlpha.800",
                }}
              >
                <CopyIcon mr={1} />
                Copy Address
              </Button>

              <Link
                display="flex"
                alignItems="center"
                fontSize="sm"
                color="gray.400"
                href={`https://ropsten.etherscan.io/address/${account}`}
                isExternal
                ml={6}
                _hover={{
                  color: "whiteAlpha.800",
                  textDecoration: "underline",
                }}
              >
                <ExternalLinkIcon mr={1} />
                View on Explorer
              </Link>
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter
          justifyContent="end"
          background="gray.700"
          borderBottomLeftRadius="3xl"
          borderBottomRadius="3xl"
          p={6}
        >
          <Text
            color="white"
            textAlign="left"
            fontSize="md"
            fontWeight="medium"
          >
            Your transactions will appear here...
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
