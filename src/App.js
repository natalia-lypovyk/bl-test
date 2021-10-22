import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { Layout } from "./layout";
import { ConnectButton, AccountModal } from "./components";

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />

        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
};
