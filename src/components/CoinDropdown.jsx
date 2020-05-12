import React, { useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CoinDropdown = (props) => {
  const [topTen, setTopTen] = useLocalStorage("top-ten", []);
  useEffect(() => {
    setTopTen([...props.coinData]);
    //eslint-disable-next-line
  }, [props.coinData]);

  const handleChange = (e) => {
    if (e.target.value) {
      const findCoin = topTen.find((item) => item.id === e.target.value);
      props.setCoinData([findCoin]);
    } else {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then((res) => props.setCoinData(res.data))
        .catch((err) => console.log(err));
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
        Top Ten
      </option>
      {optionList()}
    </select>
  );
};

export default CoinDropdown;
