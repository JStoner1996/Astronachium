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
import "../CSS/Character.css";

const Character: React.FC<ICharacterProps> = ({
  character,
}: ICharacterProps) => {
  return (
    <Card className="character-card">
      <Image
        className="character-image"
        src={character.image}
        wrapped
        ui={false}
      />
      <div className="character-content">
        <CardContent>
          <CardHeader>{character.name}</CardHeader>
          <CardMeta>
            <span className="role">{character.role}</span>
          </CardMeta>
          <CardDescription>
            <ItemSet itemSet={character.itemSet} />
          </CardDescription>
          <div className="button-container">
            <Button basic color="green">
              Select
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Character;
