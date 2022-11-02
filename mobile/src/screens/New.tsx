import { Heading, VStack, Text } from "native-base";
import { Header } from "../components/Header";

import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function New() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" />
      <VStack mt={8} mx={5} alignItems="center">
        <Logo width={212} height={40} color="#F7DD43" />
        <Heading
          fontFamily="heading"
          fontSize="xl"
          my={8}
          textAlign="center"
          maxW={380}
        >
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>
        <Input placeholder="Qual nome do seu bolão?" my={4} />
        <Button title="Criar meu bolão" />
        <Text
          maxW={360}
          color="gray.200"
          fontSize="sm"
          textAlign="center"
          px={10}
          mt={4}
        >
          Após criar seu bolão, você receberá um código único que podera usar
          para convidar outras pessoas
        </Text>
      </VStack>
    </VStack>
  );
}
