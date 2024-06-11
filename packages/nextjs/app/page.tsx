"use client";


import type { NextPage } from "next";
import { useAccount } from "wagmi";
import {useState} from "react";
import { Address } from "~~/components/scaffold-eth";
import { InputBase } from "~~/components/scaffold-eth";
const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [url, setUrl] = useState<string>();

  
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Zksync Ecommerce</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-7">
        


        <div className="card-actions justify-center mb-2 ">
              <button className="btn btn-primary bg-red-400">Sell Now</button>
            </div>
            <div className="mb-2 justify-center">
            <InputBase  name="url" placeholder="Search" value={url} onChange={setUrl} />
            </div>
            
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
