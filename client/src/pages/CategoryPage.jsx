import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItemsByCategory } from "../API/itemCall";
import ListTable from "../components/ListTable";
import BackButton from "../components/BackButton";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const location = useLocation();

  const [itemData, setItemData] = useState(null);
  const categoryName = location.state?.categoryName || "Unknown Category";

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getItemsByCategory(categoryId);
      setItemData(data);
    };
    fetchCategory();
  }, [categoryId]);

  return (
    <div className="m-[3rem]">
      <BackButton />
      <h1 className="text-3xl font-bold my-4">{categoryName}</h1>
      {itemData && <ListTable items={itemData} showCategory={false} />}
      <p className="text-2xl"></p>
    </div>
  );
}
