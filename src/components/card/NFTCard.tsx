import { useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Web3 from "web3";

import config from "constant/config";
import { EthIcon, FavIcon } from "../../assets/svg";

const web3 = new Web3(new Web3.providers.HttpProvider(config.infura));

const NFTCard = ({ token }: any) => {
  const [hover, setHover] = useState(false);
  const favoritesCount =
    token?.favoritesCount || (Math.random() * 100).toFixed(0);
  const price = token?.last_sale?.total_price
    ? web3.utils.fromWei(token?.last_sale?.total_price, "ether")
    : null;

  return (
    <CardWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AvatarWrapper>
        <LazyLoadImage src={token?.image_url} />
      </AvatarWrapper>
      <DetailWrapper>
        <DetailSection>
          <OwnerText>{token?.collection?.name}</OwnerText>
          {price && (
            <PriceText>
              Last <EthIcon /> {price}
            </PriceText>
          )}
        </DetailSection>
        <DetailSection>
          <TitleText>{token?.name}</TitleText>
        </DetailSection>
      </DetailWrapper>
      <NetworkDetailWrapper>
        {hover ? <BuyText>Buy now</BuyText> : <EthIcon />}
        <FavWrapper>
          <FavIcon /> {favoritesCount}
        </FavWrapper>
      </NetworkDetailWrapper>
    </CardWrapper>
  );
};

const BuyText = styled.div`
  font-weight: 600;
  font-size: 12px;
  padding: 2px 0;
  color: rgb(32, 129, 226);
  cursor: pointer;
`;

const FavWrapper = styled.div`
  cursor: pointer;
  :hover svg {
    fill: red;
  }
`;

const PriceText = styled.div`
  grid-gap: 3px;
  align-items: center;
  color: rgb(112, 122, 131);
  display: flex;
  flex-wrap: nowrap;
  -webkit-box-pack: end;
  justify-content: flex-end;
  font-size: 11px;
  svg {
    height: 14px;
  }
`;

const NetworkDetailWrapper = styled.div`
  align-items: center;
  display: flex;
  font-weight: 500;
  padding: 8px 12px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: linear-gradient(
    rgba(229, 232, 235, 0.392) 0%,
    rgb(255, 255, 255) 20%
  );
  justify-content: space-between;
  font-weight: 500;
  font-size: 12px;
  color: rgb(112, 122, 131);
`;

const TitleText = styled.span`
  color: rgb(53, 56, 64);
  font-size: 12px;
  letter-spacing: 0.1px;
  font-weight: 600;
  text-align: left;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  width: 70%;
  height: 30px;
`;
const OwnerText = styled.span`
  color: rgb(112, 122, 131);
  font-weight: 500;
  font-size: 12px;
  width: 50%;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-all;
  cursor: pointer;

  :hover {
    color: rgb(53, 56, 64);
  }
`;
const DetailSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DetailWrapper = styled.div`
  padding: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 232, 235);
  border-radius: 10px;
  position: relative;
  z-index: 2;
  writing-mode: horizontal-tb;
  font-size: 15px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 330ms ease-in-out;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px -2px #e7e5de;
  }
`;
const AvatarWrapper = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default NFTCard;
