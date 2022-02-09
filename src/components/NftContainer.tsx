import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { useWindowSize } from "../hooks/sceenSize";
import config from "constant/config";
import NFTCard from "./card/NFTCard";
import API from "../service/API";

const NftContainer: FC = () => {
  const [list, setlist] = useState([]);
  const [gridCount, setGridCount] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const size = useWindowSize();

  const owner = config.defaultAddress;

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    const containerWidth = size.width;
    let grid = Math.floor(containerWidth / 281);
    if (!grid) {
      setGridCount(1);
    } else {
      setGridCount(grid);
    }
  }, [size]);

  const fetchList = async () => {
    let params = {
      owner,
      // offset: 0,
      // limit: 20,
      // order_direction:"desc"
    };
    setisLoading(true);
    let response = await API.getNFTList(params);
    setisLoading(false);
    if (response?.assets) setlist(response?.assets);
  };

  return (
    <Container style={{ gridTemplateColumns: `repeat(${gridCount}, 1fr)` }}>
      {list.map((value, index) => (
        <NFTCard key={index} token={value} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 15px;
  margin-top: 20px;
`;

export default NftContainer;
