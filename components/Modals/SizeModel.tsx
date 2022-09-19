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
    recipeId: number;
    recipeImage: string;
    recipeDiscription: string;
    recipeTitle: string;
    recipeCookTime: number;
    recipeHowTo: string;
    recipeIngridients: string[];
    recipeRatings: number;
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
            foodId={cardModalInfo.recipeId}
            foodTitle={cardModalInfo.recipeTitle}
            foodDiscription={cardModalInfo.recipeDiscription}
            foodImage={cardModalInfo.recipeImage}
          />
          <RecipeModeInstructions recipeHowTo={cardModalInfo.recipeHowTo} />
          <RecipeModelIngridents
            recipeIngridients={cardModalInfo.recipeIngridients}
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
