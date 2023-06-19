import { useContext, useState, createContext } from "react";

export const UserContext = createContext();
export const UserContextUpdate = createContext();

export const Shop = () => {
  return useContext(UserContext);
};

export const UpdateShop = () => {
  return useContext(UserContextUpdate);
};

const testUrl = require("../assets/images/shopCardTestImage.png");

export default UserProvider = ({ children }) => {
  const [shopItems, setShopItems] = useState([]);

  const updateShop = (item) => {
    setShopItems([...shopItems, item]);
  };

  return (
    <UserContext.Provider value={shopItems}>
      <UserContextUpdate.Provider value={updateShop}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
};
