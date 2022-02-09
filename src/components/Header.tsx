import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "@mantine/core";
import Web3 from "web3";

import config from "constant/config";

const web3 = new Web3(new Web3.providers.HttpProvider(config.infura));

const HeaderComponent: FC = () => {
  const [balance, setbalance] = useState(0);

  useEffect(() => {
    getBalance();
  }, []);

  const getBalance = () => {
    web3.eth.getBalance(config.defaultAddress, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        const _balance = Number(
          Number(web3.utils.fromWei(result, "ether")).toFixed(4)
        );
        setbalance(_balance);
      }
    });
  };

  return (
    <Header
      height={60}
      padding="sm"
      style={{
        backgroundColor: "#00152f",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        src="https://constellationnetwork.io/wp-content/uploads/2021/04/Constellation-Logo_White.png"
        width="150"
        alt="Constellation Logo"
      />
      {balance && <WalletButton>{balance} ETH</WalletButton>}
    </Header>
  );
};

const WalletButton = styled.div`
  background: #393939;
  color: #f1c409;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

export default HeaderComponent;
