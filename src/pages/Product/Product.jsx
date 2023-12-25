import Header from "../../component/Header/Header";
import { UseFetchAll } from "../../common/UseFetch";
import "./style.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ListProductByCategory from "../../component/ListProductByCategory/ListProductByCategory";

export default function Product() {
  const { product, setProduct, paging, setPaging } = UseFetchAll(`${import.meta.env.VITE_BASE_URL}/api/categories`);
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useSearchParams();
  var url =""

  useEffect(() => {
    let arr = query.get("danhmuc");
    setCategory(arr ? arr.split("%") : []);
  }, [query]);

  function onChangeBox(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setCategory((prevCategories) => {
      const updatedCategories = isChecked ? [...prevCategories, value] : prevCategories.filter((item) => item !== value);
      return updatedCategories;
    });

    if (isChecked) {
      setQuery({
        danhmuc: [...category, value].join("%"),
      });
    } else {
      setQuery({
        danhmuc: category.filter((item) => item !== value).join("%"),
      });
    }
  }
  category?.forEach((item,index)=>{
    url += `filters[idCategories][slug][$in][${index}]=${item}&`
  })
  function isCheck(text) {
    return category?.includes(text);
  }
  return (
    <>
      <Header></Header>
      <div className="filter-category">
        {product?.map((item) => (
          <div key={item?.id}>
            <input type="checkbox" value={item?.attributes?.slug} onChange={onChangeBox} checked={isCheck(item?.attributes?.slug)} />
            <label>{item?.attributes?.name}</label>
          </div>
        ))}
      </div>
        <ListProductByCategory slugs={url}></ListProductByCategory>
    </>
  );
}
