import React from "react";
import { Iitem, TAllergy, TSubCate } from "../pages/AdminItem.js";

const ItemList = ({
  item,
  allergyArr,
  subCateArr,
}: {
  item: Iitem;
  allergyArr: Array<TAllergy>;
  subCateArr: Array<TSubCate>;
}) => {
  const allergy: Array<TAllergy | undefined> = item.allergy.map(item => {
    return allergyArr.find(allergy => allergy.value === item);
  });
  const subCate: Array<TSubCate | undefined> = item.subCate.map(item => {
    return subCateArr.find(subCate => subCate.value === item);
  });
  const filterAllergy: Array<JSX.Element> = allergy.map((item, idx) => {
    return <span key={idx}>{item?.label}</span>;
  });
  const filterSubCate: Array<JSX.Element> = subCate.map((item, idx) => {
    return <span key={idx}>{item?.label}</span>;
  });
  return (
    <div className="itemListWrap">
      <div className="itemNum">
        <span>{item.id}</span>
      </div>
      <div className="itemName-item">
        <img src={item.thumnail} alt="썸네일" />
        <span>{item.name}</span>
      </div>
      <div className="itemPrice">
        <span>{item.price}</span>
      </div>
      <div className="itemCate">
        <span>{item.cate} 단계</span>
      </div>
      <div className="itemSubCate">{filterSubCate}</div>
      <div className="itemAllergy">{filterAllergy}</div>
      <div className="itemButton">
        <span className="editButton">수정</span>
        <span className="delButton">삭제</span>
      </div>
    </div>
  );
};

export default ItemList;
