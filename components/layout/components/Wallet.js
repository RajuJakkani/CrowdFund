import styled from "styled-components";
import { ethers } from "ethers";
import { useState } from "react";
import { Balance } from "@mui/icons-material";

const networks = {
  sepolia: {
    chainId: `0x${Number(11155).toString(16)}`,
    chainName: "Ethereum_Sepolia_(Alchemy)",
    currency_symbol: "ETH",
    rpcUrls: [
      "https://eth-sepolia.g.alchemy.com/v2/vuMix1TyW19ihWbQ4NheCV1yFr0kQcrR",
    ],
    blockExplorerUrl: ["https://sepolia.etherscan.io"],
  },
};

const Wallet = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // if (provider.network !== "sepolia") {
    //   z;
    //   await window.ethereum.request({
    //     method: "wallet_addEthereumChain",
    //     params: [
    //       {
    //         ...networks["sepolia"],
    //       },
    //     ],
    //   });
      const account = provider.getSigner();
      const Address = await account.getAddress();
      setAddress(Address);
      const Balance = ethers.utils.formatEther(await account.getBalance());
      setBalance(Balance);
    // }
  };
  return (
    <ConnectWalletWrapper onClick={connectWallet}>
      {balance == '' ? <Baalance></Baalance> : <Baalance>{balance.slice(0,4)} ETH </Baalance>}
      {address == '' ? <Address>Connect Wallet</Address>: <Address>{address.slice(0,6)}...{address.slice(39)}</Address> }
    </ConnectWalletWrapper>
  );
};

const ConnectWalletWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  padding: 5px 9px;
  height: 100%;
  border-radius: 10px;
  margin-right: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size:small;
  cursor: pointer;
`;

const Address = styled.h2`
    background-color: ${(props) => props.theme.bgSubDiv};
    height:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 0 5px 0 5px;
    border-radius:10px
`

const Baalance = styled.h2`
    height:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    margin-right:5px;
`

export default Wallet;
