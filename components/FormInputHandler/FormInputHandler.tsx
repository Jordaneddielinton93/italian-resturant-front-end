import React from "react";
import { FormLabel, Input, chakra, Button } from "@chakra-ui/react";
type Props = {
  label: string;
  type: string;
  name: string;
  placerholder: string;
  value: string;
  errorBorder: boolean;
  errMessage: string;
  onChange: (e: any) => void;
  onFocus: (e: any) => void;
  handleClick: () => void;
};

export default function FormInputHandler({
  label,
  type,
  name,
  placerholder,
  value,
  errorBorder,
  errMessage,
  handleClick,
  onChange,
  onFocus,
}: Props) {
  return (
    <>
      <FormLabel pos={"relative"}>
        <chakra.p
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          p={"2px 0 0 20px"}
          borderRadius={"20px"}
          display={errorBorder ? "block" : "none"}
          bg={errorBorder ? "red" : ""}
          h={"20px"}
          w="100%"
          pos={"absolute"}
          fontSize="10px"
          top="5px"
          zIndex={1}
        >
          {errMessage}
        </chakra.p>
        <Button
          onClick={handleClick}
          textAlign={"center"}
          minH={"15px"}
          minW={"15px"}
          zIndex={2}
          display={errorBorder ? "block" : "none"}
          borderRadius={"100%"}
          bg="white"
          pos={"absolute"}
          fontSize="10px"
          top="-10px"
          right="0px"
        >
          Ok
        </Button>
        {label}
      </FormLabel>
      <Input
        color={errorBorder ? "grey" : "black"}
        type={type}
        name={name}
        placeholder={placerholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
    </>
  );
}
