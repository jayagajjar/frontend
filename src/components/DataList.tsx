import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllItems } from "../data/api";

interface User {
  _id: number;
  id: number;
  name: string;
}

function loadShoppingList() {
  var allItems: User[] = [];
  getAllItems()
    .then((items) => {
      items.data.data.map((a: User) => {
        return allItems.push({
          name: a.name,
          id: a._id,
          _id: 0,
        });
      });
    })
    .catch((error) => {
      if (error.response.status === 404) {
        console.log("Shopping list is empty");
      }
    });
}

const DataList = () => {
  const [allItems, setAllItems] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://backend-25ww.onrender.com/api/shoppinglist"
      );
      console.log(response.data);
      setAllItems(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <h1>
      Data{" "}
      {allItems.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </h1>
  );
};
export default DataList;
