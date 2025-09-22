"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import Logo from "@/components/ui/Logo";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleGetStarted = () => {
    setIsLoading(true);
    return setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  useEffect(() => {
    const timeout = handleGetStarted();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box
      minH="100vh"
      bg="gray.50"
      display="flex"
      alignItems="center"
      position="relative"
    >
      <Container textAlign="center">
        {/* Main Content */}

        {/* Loading Overlay */}
        {isLoading && (
          <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="whiteAlpha.900"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={9999}
            backdropFilter="blur(4px)"
          >
            <VStack spaceX={3}>
              <Logo />
              <Text
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="bold"
                color="gray.800"
                lineHeight="shorter"
              >
                Simple Todo.
                <br />
              </Text>

              <Spinner size="lg" color="blue.500" />
              <Text color="gray.600" fontSize="md">
                Setting up your workspace...
              </Text>
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
