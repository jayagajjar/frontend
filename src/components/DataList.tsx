import axios from "axios";
import React, { useEffect, useState } from "react";
import { deleteItemById, getAllItems, insertItem } from "../data/api";

interface User {
  _id: number;
  id: number;
  name: string;
}

const DataList = () => {
  const [allItems, setAllItems] = useState<User[]>([]);
  const [newItemName, setNewItemName] = useState();
  const fetchData = async () => {
    const response = await getAllItems();
    console.log(response.data);
    setAllItems(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event: any) => {
    console.log(event.target.value);
    setNewItemName(event.target.value);
  };
  const handleDeleteItem = (event: any) => {
    deleteItemById(event.target.id).then((res) => {
      console.log(event.target.name, ` deleted successfully `);
      fetchData();
    });
  };

  return (
    <>
      <h1>
        Data{" "}
        {allItems.map((user) => (
          <li key={user._id}>
            {user.name}
            <button
              onClick={handleDeleteItem}
              id={user._id.toString()}
              name={user.name}
            >
              Delete
            </button>
          </li>
        ))}
      </h1>
      <input type="text" name="newItemName" onChange={handleInputChange} />
      <button
        onClick={() => {
          insertItem({ name: newItemName }).then((res) => {
            console.log(`Item inserted successfully ` + newItemName);
            fetchData();
          });
        }}
      >
        Add Item
      </button>
    </>
  );
};
export default DataList;
