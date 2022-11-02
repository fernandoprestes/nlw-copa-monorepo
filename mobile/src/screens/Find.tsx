import { Heading, VStack } from "native-base";
import { Header } from "../components/Header";

import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />
      <VStack mt={8} mx={5} alignItems="center">
        <Logo width={212} height={40} color="#F7DD43" />
        <Heading
          fontFamily="heading"
          fontSize="xl"
          my={8}
          textAlign="center"
          maxW={280}
        >
          Encontre um bolão através de seu código único
        </Heading>
        <Input placeholder="Qual o código do bolão?" my={4} />
        <Button title="Buscar bolão" />
      </VStack>
    </VStack>
  );
}
