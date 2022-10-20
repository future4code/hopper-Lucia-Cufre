import { v4 } from "uuid";
export const generateId = () => {
  return Date.now().toString();
};

//com o id gerado com uuid dava o seguinte erro //Data too long for column 'id' at row 1