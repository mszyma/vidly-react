import React from "react";

const ItemList = ({
  selectedItem,
  items,
  onItemSelect,
  textProperty,
  valueProperty
}) => {
  return (
    <div className="list-group pt-5">
      {items.map(item => (
        <button
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </button>
      ))}
    </div>
  );
};

ItemList.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ItemList;
