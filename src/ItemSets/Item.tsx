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

const Item: React.FC<Item> = ({ image, name }: Item) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <CardContent>
        <CardHeader>{name}</CardHeader>
        <CardDescription></CardDescription>
      </CardContent>
    </Card>
  );
};

export default Item;
