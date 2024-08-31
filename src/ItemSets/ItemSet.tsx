import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";

const ItemSet: React.FC<IItemSet> = ({ itemSet }: IItemSet) => {
  return (
    <Card>
      <Image src={itemSet.image} wrapped ui={false} />
      <CardContent>
        <CardHeader>{itemSet.name}</CardHeader>
        <CardMeta>
          <span className="role">{itemSet.role}</span>
        </CardMeta>
        <CardDescription>
          {itemSet.items.map((item) => (
            <>{item.name}</>
          ))}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ItemSet;
