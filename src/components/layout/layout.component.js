import { Flex } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bg="gray.800"
      >
      {children}
    </Flex>
  );
}
