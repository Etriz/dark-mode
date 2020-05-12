import React, { useState, useEffect } from "react";
import axios from "axios";

const CoinDropdown = () => {
  const [topTen, setTopTen] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10")
      .then((res) => {
        console.log(res.data);
        setTopTen([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.value) {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=1&ids=${e.target.value}`
        )
        .then((res) => {
          console.log(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      optionList();
    }
  };
  const optionList = () => {
    return topTen.map((item) => {
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
        --Choose--
      </option>
      {optionList()}
    </select>
  );
};

export default CoinDropdown;
