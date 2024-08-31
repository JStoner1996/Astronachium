interface ICharacterProps {
  character: Character;
}

interface IItemSet {
  itemSet: ItemSet;
}

type Character = {
  image: string;
  name: string;
  role: string;
  itemSet: ItemSet;
};

type ItemSet = { image: string; name: string; role: string; items: Item[] };

type Item = {
  name: string;
  image: string;
};
