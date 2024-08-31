import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import ItemSet from "../ItemSets/ItemSet";

const Character: React.FC<ICharacterProps> = ({
  character,
}: ICharacterProps) => {
  console.log("Character: ", character);
  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <CardContent>
        <CardHeader>{character.name}</CardHeader>
        <CardMeta>
          <span className="role">{character.role}</span>
        </CardMeta>
        <CardDescription>
          {<ItemSet itemSet={character.itemSet}></ItemSet>}
        </CardDescription>
        <Button basic color="green">
          Select
        </Button>
      </CardContent>
    </Card>
  );
};

export default Character;
