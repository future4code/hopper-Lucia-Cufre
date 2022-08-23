type products = {
  discountPrice: number;
  name: string;
  price: number;
  classification: string;
  newPrice: number;
};

const arrayProducts: products[] = [
  {
    discountPrice: 5,
    name: "Blusa",
    price: 85,
    classification: "Verão",
    newPrice: 0,
  },
  {
    discountPrice: 10,
    name: "Casaco",
    price: 200,
    classification: "Inverno",
    newPrice: 0,
  },
  {
    discountPrice: 4,
    name: "Toalha",
    price: 80,
    classification: "Banho",
    newPrice: 0,
  },
  {
    discountPrice: 7,
    name: "Calcinha",
    price: 85,
    classification: "Intimas",
    newPrice: 0,
  },
  {
    discountPrice: 4,
    name: "Shampoo",
    price: 50,
    classification: "Banho",
    newPrice: 0,
  },
  {
    discountPrice: 10,
    name: "Sweater",
    price: 105,
    classification: "Inverno",
    newPrice: 0,
  },
  {
    discountPrice: 5,
    name: "Short",
    price: 100,
    classification: "Verão",
    newPrice: 0,
  },
];

function blackFriday(array: products[], clas: string) {
  return array
    .map((prod) => {
      if (prod.classification && prod.classification === clas) {
        return {
          ...prod,
          newPrice: prod.price - (prod.price * prod.discountPrice) / 100,
        };
      }
    })
    .filter(Boolean);
}

console.log(blackFriday(arrayProducts, "Inverno"));
