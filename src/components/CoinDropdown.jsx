import React from "react";

const CoinDropdown = (props) => {
  const handleChange = (e) => {
    if (e.target.value) {
      const findCoin = props.defaultTen.find((item) => item.id === e.target.value);
      props.setCoinData([findCoin]);
    } else {
      props.setCoinData([...props.defaultTen]);
    }
  };
  const optionList = () => {
    return props.defaultTen.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  };

  return (
    <select onChange={handleChange}>
      <option key="default" value="">
        Top Ten
      </option>
      {optionList()}
    </select>
  );
};

export default CoinDropdown;
