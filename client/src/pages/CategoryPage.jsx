import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItemsByCategory } from "../API/itemCall";
import ListTable from "../components/List/ListTable";
import BackButton from "../components/Buttons/BackButton";
import RedButton from "../components/Buttons/RedButton";
import AddItemModal from "../components/Modal/AddItemModal";
import Modal from "../components/Modal/Modal";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const location = useLocation();
  const categories = location.state?.categories || [];

  const [itemData, setItemData] = useState([]);
  const category = categories.find(
    (category) => category.id === parseInt(categoryId)
  );
  const categoryName = category ? category.name : "";
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getItemsByCategory(categoryId);
      setItemData(data);
    };
    fetchCategory();
  }, [categoryId]);

  const handleNewItem = (item) => {
    setItemData((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="m-[3rem]">
      <div className="flex justify-between">
        <BackButton />
        <RedButton
          func={() => {
            setShowModal(true);
          }}
        >
          Add New Item
        </RedButton>
      </div>
      <div className="flex flex-col gap-2 my-4">
        <h1 className="text-3xl font-bold">{categoryName}</h1>
        <p className="text-md text-gray-600">Category ID: {categoryId}</p>
      </div>
      {itemData.length > 0 ? (
        <ListTable items={itemData} showCategory={false} />
      ) : (
        <p className="text-2xl text-gray-600">Current list is empty</p>
      )}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddItemModal
          categories={categories}
          categoryId={categoryId}
          onItemAdded={handleNewItem}
        />
      </Modal>
    </div>
  );
}
