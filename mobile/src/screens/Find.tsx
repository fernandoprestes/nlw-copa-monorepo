import { Heading, useToast, VStack } from "native-base";
import { Header } from "../components/Header";
import { useState } from "react";

import { api } from "../services/api";

import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Find() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const toast = useToast();
  const { navigate } = useNavigation();

  async function handleJoinPool() {
    try {
      setIsLoading(true);
      if (!code.trim()) {
        toast.show({
          title: "Informe o código",
          placement: "top-right",
          bgColor: "blue.500",
        });
        return;
      }
      await api.post("/pools/join", { code });
      toast.show({
        title: "Sucesso, voce entrou no bolão com sucesso",
        placement: "top-right",
        bgColor: "green.500",
      });
      navigate("pools");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.show({
        title: "Não foi possível encontrar o bolão",
        placement: "top-right",
        bgColor: "red.500",
      });
    }
  }

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
        <Input
          placeholder="Qual o código do bolão?"
          my={4}
          autoCapitalize="characters"
          onChangeText={setCode}
          value={code}
        />
        <Button
          title="Buscar bolão"
          isLoading={isLoading}
          onPress={handleJoinPool}
        />
      </VStack>
    </VStack>
  );
}
