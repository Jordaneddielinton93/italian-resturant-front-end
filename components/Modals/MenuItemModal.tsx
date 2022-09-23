import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  chakra,
} from "@chakra-ui/react";
import RecipeModelIngridents from "../RecipeModalSections/RecipeModelIngridents";
import RecipeModalhero from "../RecipeModalSections/RecipeModalhero";
import { useDispatch, useSelector } from "react-redux";
import { addMenuRecipeIdAndAmount } from "../01-Reducers/resturantSlice";
import { useRef } from "react";

type SizeModelProp = {
  isOpen: boolean;
  onClose: () => void;
  cardModalInfo: {
    recipeid: number;
    recipeimage: string;
    recipediscription: string;
    recipetitle: string;
    recipecooktime: number;
    recipehowto: string;
    recipeingridients: string[];
    reciperatings: number;
    tags: string[];
  };
};

export default function MenuItemModel({
  isOpen,
  onClose,
  cardModalInfo,
}: SizeModelProp) {
  // let state = useSelector((state: any) => state.resturant);

  let dispatch = useDispatch();
  let inputQuantityRef = useRef<any>({ value: "" });
  return (
    <>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent
          bg={"brand.grey.100"}
          minW="95vw"
          p={["50px 0px", "50px 0px", "50px 20px", "50px 20px"]}
        >
          <RecipeModalhero
            foodid={cardModalInfo?.recipeid}
            foodtitle={cardModalInfo?.recipetitle}
            fooddiscription={cardModalInfo?.recipediscription}
            foodimage={cardModalInfo?.recipeimage}
          />
          <Flex
            width={"100%"}
            bg="white"
            mt={"10px"}
            border="solid thin black"
            borderRadius={"8px"}
            p={"10px 0"}
            justifyContent="center"
            gap={"10px"}
          >
            <chakra.select
              ref={inputQuantityRef}
              typeof="radio"
              w="150px"
              height={"50px"}
              bg="black"
              color={"white"}
              borderRadius={"8px"}
              textAlign="center"
            >
              <chakra.option value="1">Quantity: 1</chakra.option>
              <chakra.option value="2">Quantity: 2</chakra.option>
              <chakra.option value="3">Quantity: 3</chakra.option>
              <chakra.option value="4">Quantity: 4</chakra.option>
            </chakra.select>
            <Button
              _hover={{ bg: "grey" }}
              onClick={() => {
                onClose();
                dispatch(
                  addMenuRecipeIdAndAmount({
                    recipeId: cardModalInfo?.recipeid,
                    recipeAmount: Number(inputQuantityRef.current.value),
                  })
                );
              }}
              w="150px"
              height={"50px"}
              bg="black"
              color={"white"}
            >
              Add To Basket
            </Button>
          </Flex>
          <RecipeModelIngridents
            recipeIngridients={cardModalInfo?.recipeingridients}
          />
          <ModalCloseButton />
          <ModalFooter justifyContent={"center"}>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
