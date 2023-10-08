import styled from "styled-components"
import { ethers } from "ethers"
import { useState } from "react"

const networks = {
    sepolia : {
        Network_Name : "Sepolia",
        RPC_URL : 'https://rpc.sepolia.org',
        Chain_ID : '11155111',
        Currency_Symbol : 'SepoliaETH',
        Block_Explorer_URL  : 'https://sepolia.etherscan.io/',
    }
}

const Wallet = () => {
    const [address, setAddress] = useState('');

    const connectWallet = async () => {
        await window.ethereum.request({ method: "eth_requestAccounts"});
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        if(provider.networks !== "SepoliaETH"){
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        ...networks["sepolia"]
                    }
                ]
            })
            const account = provider.getSigner();
            const Address = await account.getAddress();
            setAddress(Address);
        }
    }
  return (
    <div onClick={connectWallet}>Wallet {address}</div>
  )
}

export default Wallet