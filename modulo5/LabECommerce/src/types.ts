export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
};

export type purchases = {
  id: string,
  userId: string,
  productId: string,
  quantity:number,
  totalPrice:number
}
