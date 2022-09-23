import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import RecipeModelIngridents from "../RecipeModalSections/RecipeModelIngridents";
import RecipeModalhero from "../RecipeModalSections/RecipeModalhero";
import RecipeModeInstructions from "../RecipeModalSections/RecipeModeInstructions";

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

export default function SizeModel({
  isOpen,
  onClose,
  cardModalInfo,
}: SizeModelProp) {
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
          <RecipeModeInstructions recipeHowTo={cardModalInfo?.recipehowto} />
          <RecipeModelIngridents
            recipeIngridients={cardModalInfo?.recipeingridients}
          />
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
