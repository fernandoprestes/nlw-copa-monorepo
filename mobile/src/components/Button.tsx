import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  title: string;
  variant?: "PRIMARY" | "SECONDARY";
}

export function Button({ title, variant = "PRIMARY", ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={variant === "SECONDARY" ? "red.500" : "yellow.600"}
      _pressed={{
        bg: variant === "SECONDARY" ? "red.400" : "yellow.500",
      }}
      _loading={{ _spinner: { color: "black" } }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={variant === "SECONDARY" ? "white" : "black"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
