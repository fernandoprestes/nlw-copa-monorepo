import { useState } from "react";
import { Heading, VStack, Text, useToast } from "native-base";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

import { api } from "../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  async function handlePoolCreate() {
    if (!title.trim()) {
      return toast.show({
        title: "Informe um nome para o seu bolão",
        placement: "top-right",
        bgColor: "red.500",
      });
    }
    try {
      setIsLoading(true);
      await api.post("/pools", { title });
      toast.show({
        title: "Bolão criado com sucesso",
        placement: "top-right",
        bgColor: "green.500",
      });
      setTitle("");
    } catch (error) {
      console.log(error);
      return toast.show({
        title: "Não foi possível criar o bolão",
        placement: "top-right",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

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
        <Input
          placeholder="Qual nome do seu bolão?"
          my={4}
          onChangeText={setTitle}
          value={title}
        />
        <Button
          title="Criar meu bolão"
          onPress={handlePoolCreate}
          isLoading={isLoading}
        />
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
