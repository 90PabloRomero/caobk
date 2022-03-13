import { MainWrapper } from "../styles/MainWrapper";
import { MainWrapperBelowArea } from "../styles/MainWrapperBelowArea";
import leftCornerDog from "./../assets/cornerLeftDog.png";
import rightCornerDog from "./../assets/cornerRightDog.png";
import leftCornerDogD from "./../assets/cornerLeftDogD.png";
import rightCornerDogD from "./../assets/cornerRightDogD.png";
import styled from "styled-components";
import connectWalletButton from "./../assets/connectWallet.png";
import openButton from "./../assets/openButton.png";
import embryo from "./../assets/embryo.svg";
import embryoD from "./../assets/embryoD.svg";
import binance from "./../assets/binance.png";
import caologom from "./../assets/logocaom.png";
import logoD from "./../assets/logoD.png";
import presaleDesktopSubBG from "./../assets/presaleDesktopSubBG.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact";
import Web3 from "web3";
import { BusdAbiService } from "../utils/services/busd";
import { mainNetAbiService } from "../utils/services/mainnet";

const PresalePage = () => {
  //mint
  const eggPrice = 100 * Number(price);
  const isBusdNotApproved = Number(allowance) < Number(price) * 1000e17;
  const [allowance, setAllowance] = useState(0);
  const [price, setPrice] = useState(1);
  const [currentMintedNfts, setCurrentMintedNfts] = useState();
  const [wholeMintedNfts, setWholeMintedNfts] = useState(0);
  const mainnetContract = "0x7d80E1A99f0cab1fB1A0f2790F42e5b59A3F020f";
  //
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  //more mint code
  const mainnetAbi = mainNetAbiService;
  const account1 = walletAddress;
  let tokenId;
  useEffect(() => {
    (async () => {
      const rpcURL = "https://bsc-dataseed.binance.org/";
      const web3 = new Web3(rpcURL);
      if (account1 && web3.eth.Contract) {
        const BUSDContractAddress =
          "0xe9e7cea3dedca5984780bafc599bd69add087d56";
        const BUSDABI = BusdAbiService;

        const BUSDContract = await new web3.eth.Contract(
          BUSDABI,
          BUSDContractAddress
        );

        // const myContract = await new web3.eth.Contract(mainnetAbi, mainnetContract);
        const allowance = await BUSDContract.methods
          .allowance(account1, mainnetContract)
          .call();
        setAllowance(allowance);
      }
    })();
  }, [account1]);

  //calculate mint nfts y get count of nfts... no estoy seguro si lo necesitamos, lo agrego para luego posiblemente sacarlo
  function calculateMintedEggs() {
    const rpcURL = "https://bsc-dataseed.binance.org/";
    const web3 = new Web3(rpcURL);
    window.contract = new web3.eth.Contract(mainnetAbi, mainnetContract);
    window.contract.methods.tokenId().call((err, result) => {
      setWholeMintedNfts(parseInt(result));
    });
    window.contract.methods.balanceOf(walletAddress).call((err, result) => {
      console.log(parseInt(result));
      setCurrentMintedNfts(parseInt(result));
    });
  }

  function getCountOfNFTs() {
    const rpcURL = "https://bsc-dataseed.binance.org/";
    const web3 = new Web3(rpcURL);
    window.contract = new web3.eth.Contract(mainnetAbi, mainnetContract);
    window.contract.methods.tokenId().call((err, result) => {
      setWholeMintedNfts(parseInt(result));
    });
    window.contract.methods.balanceOf(walletAddress).call((err, result) => {
      console.log(parseInt(result));
    });
  }

  // fin del copypasta

  const mint_NFT = async (values) => {
    const rpcURL = "https://bsc-dataseed.binance.org/";
    const web3 = new Web3(rpcURL);

    const BUSDContractAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
    // testnet
    // const BUSDContractAddress = "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";

    const BUSDABI = BusdAbiService;

    const BUSDContract = await new web3.eth.Contract(
      BUSDABI,
      BUSDContractAddress
    );

    // const myContract = await new web3.eth.Contract(mainnetAbi, mainnetContract);

    const busdBalance = await BUSDContract.methods.balanceOf(account1).call();

    // set loading modal while order process is on
    // setCurrentModal("loading-screen");
    // setModalOpen(true);
    // setLoading(true);
    const mainnetContractInterface = await new web3.eth.Contract(
      mainnetAbi,
      mainnetContract
    );

    const transactionParameters = {
      to: mainnetContract,
      from: account1,
      data: mainnetContractInterface.methods
        .safeMint(web3.utils.toHex(price * 1000e17))
        .encodeABI(),
    };
    // setMMStatusInfo("Esperando a Metamask");

    if (values.length > 0) {
      try {
        for (let i = 1; i <= values; i++) {
          // const txHash = await window.ethereum.request({
          //   method: "eth_sendTransaction",
          //   params: [transactionParameters],
          // });
          const transfer = () => {
            return window.ethereum.request({
              method: "eth_sendTransaction",
              params: [transactionParameters],
            });
          };
          transfer()
            .then((tx) => {
              // setLoading(true);
              console.log("transaction done, ", tx);
              const intervalHandler = setInterval(async () => {
                const nftBalance = await mainnetContractInterface.methods
                  .balanceOf(account1)
                  .call();
                if (nftBalance > currentMintedNfts) {
                  calculateMintedEggs();
                  // api
                  //   .post("/registerNFT", {
                  //     params: {address: account1, id: currentMintedNfts + 1},
                  //   })
                  //   .then(function (response) {
                  //   })
                  //   .catch(function (error) {
                  //     console.log("stories error response :: ", error);
                  //   });
                  // toast.success(
                  //   `Ha comprado con exito ${
                  //     currentMintedNfts + 1
                  //   } NFTs. Bienvenido a la aventura`,
                  //   {
                  //     position: "top-right",
                  //     autoClose: 5000,
                  //     hideProgressBar: false,
                  //     closeOnClick: true,
                  //     pauseOnHover: true,
                  //     draggable: true,
                  //     progress: undefined,
                  //   }
                  // );
                  // setCurrentModal("buy-egg");
                  // setModalOpen(false);
                  // setLoading(false);
                  clearInterval(intervalHandler);
                }
              }, 2000);
            })
            .catch((error) => {
              // setLoading(false);
              // setModalOpen(false);
              // toast.warn("Error en la compra. Error en la red", {
              //   position: "top-right",
              //   autoClose: 1000,
              //   hideProgressBar: false,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   progress: undefined,
              // });
              console.log(error);
            });
        }
      } catch (error) {
        alert(error);
        // setModalOpen(false);
        // setLoading(false);
        // toast.warn("Error en la compra. Error en la red", {
        //   position: "top-right",
        //   autoClose: 1000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }
    }
  };

  // handler to open ShowBuyEgg
  const handleBuyEgg = () => {
    console.log("set buy nft");
    // setCurrentModal("buy-egg");
    // setModalOpen(true);
  };

  // form component
  const BuyEggForm = ({ onMintNFT }) => {
    const [proStatus, setProStatus] = useState(0);
    // const {
    //   handleSubmit,
    //   register,
    //   watch,
    //   formState: {errors},
    // } = useForm({
    //   defaultValues: {
    //     nftquantity: "1",
    //   },
    // });
    const onSubmit = (values) => {
      if (currentMintedNfts >= 10) {
        // toast.warn("mint count error", {
        //   position: "top-right",
        //   autoClose: 1000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        // alert('Minted Count');
        return;
      }
      if (Number(allowance) < Number(price) * 1000e17) {
        // toast.warn("Error en la compra. Insuficiente credito", {
        //   position: "top-right",
        //   autoClose: 1000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        console.log("not enough founds");
      }

      // console.log(values.nftquantity);
      // console.log(formState);
      onMintNFT(values);
    };
    // const onInputChange = (event) => {
    //   console.log(event.target.value);
    //   setInputValue(event.target.value);
    // };
    // const inputValue = watch(["nftquantity", "number"]);
    const handleChange = (event) => {
      // document.getElementById("totalPrice").innerHTML =
      //   eggPrice * event.target.value + " BUSD";
      if (Number(event.target.value) < 1) setPrice(Number(event.target.value));
    };
  };

  // handler when click Approve
  const approveBUSDHandler = async () => {
    try {
      // setModalOpen(true);
      // setCurrentModal("loading-screen");
      const rpcURL = "https://bsc-dataseed.binance.org/";
      const web3 = new Web3(rpcURL);
      // important, this busd address is probably wrong
      const BUSDContractAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
      const BUSDABI = BusdAbiService;

      const BUSDContract = await new web3.eth.Contract(
        BUSDABI,
        BUSDContractAddress
      );

      // const myContract = await new web3.eth.Contract(mainnetAbi, mainnetContract);

      const transactionParameters = {
        to: BUSDContractAddress,
        from: account1,
      };
      const busdBalance = await BUSDContract.methods
        // .balanceOf(account1)
        .call();

      if (Number(busdBalance) < price * 1000e17) {
        // setModalOpen(false);
        // setLoading(false);
        // return toast.warn(
        //   "La aprobacion no se pudo realizar. Insuficiente credito",
        //   {
        //     position: "top-right",
        //     autoClose: 1000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   }
        // );
        return console.log("transaccion exitosa");
      }
      const allowance = await BUSDContract.methods
        .allowance(account1, mainnetContract)
        .call();

      if (Number(allowance) < price * 1000e17) {
        // setLoading("true");
        transactionParameters.data = await BUSDContract.methods
          .approve(mainnetContract, web3.utils.toHex(5000e17))
          .encodeABI();
        const txHash = await window.ethereum
          .request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
          })
          .catch(() => {
            // setLoading(false);
            // setModalOpen(false);
            console.log("approve failed");
          });
        const intervalHandler = setInterval(async () => {
          const allowance = await BUSDContract.methods
            .allowance(account1, mainnetContract)
            .call();
          if (Number(allowance) >= price * 1000e17) {
            setAllowance(Number(allowance));
            // toast.success(
            //   "Aprobacion realizada con exito. Ya puede comprar nfts",
            //   {
            //     position: "top-right",
            //     autoClose: 1000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //   }
            // );
            // setModalOpen(false);
            // setLoading(false);
            console.log("approve exitoso");
            clearInterval(intervalHandler);
          }
        }, 2000);
        console.log("end");
      } else {
        console.log("here");
      }
    } catch (err) {
      // setModalOpen(false);
      // setLoading(false);
      // toast.warn("La aprobracion no se pudo realizar. Error en la red", {
      //   position: "top-right",
      //   autoClose: 1000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      console.log("fondos insuficientes");
    }
  };
  //

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
    } else {
      setStatus(
        "You must install Metamask, a virtual Ethereum wallet, in your browser."
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  return (
    <>
      <MainWrapper>
        <Link to={"/"}>
          <LogoContainer>
            <img src={caologom} alt={"Crypto WAO"} />
            <img src={logoD} alt={"Crypto WAO"} />
          </LogoContainer>
        </Link>
        <PresalePageWrapper>
          <div
            style={{
              padding: "0 1rem",
              display: "grid",
              placeItems: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <EmbryoContainer />
            <div>
              <span style={{ fontSize: "24px" }}>NFT</span>{" "}
              <span style={{ fontSize: "16px" }}>Price:</span>{" "}
              <span style={{ fontSize: "23px" }}>15</span>
              <span style={{ fontSize: "16px" }}>BUSD</span>
              <img
                src={binance}
                alt={""}
                style={{ width: "24px", height: "23px" }}
              />
            </div>
            <div style={{ fontSize: "23px" }}>
              <form>
                OPEN:
                <input
                  type={"number"}
                  style={{
                    background: "none",
                    border: 0,
                    maxWidth: "45px",
                    marginLeft: "5px",
                  }}
                />
              </form>
            </div>
            <img
              src={openButton}
              alt={"open"}
              style={{
                maxWidth: "131px",
                maxHeight: "32px",
                margin: ".31rem 0",
              }}
            />
          </div>
          {walletAddress === "" ? (
            <ConnectWalletButton onClick={connectWalletPressed()} />
          ) : (
            <div style={{ textAlign: "center", fontSize: "16px" }}>
              {String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)}
            </div>
          )}
        </PresalePageWrapper>
        <MainWrapperBelowArea>
          <DogLeftCorner>
            <img src={leftCornerDog} alt={""} />
            <img src={leftCornerDogD} alt={""} />
          </DogLeftCorner>
          <DogRightCorner>
            <img src={rightCornerDog} alt={""} />
            <img src={rightCornerDogD} alt={""} />
          </DogRightCorner>
          <div style={{ fontSize: "16px", position: "relative", zIndex: 1 }}>
            2022 CRYPTO WAO · ALL RIGHTS RESERVED
          </div>
        </MainWrapperBelowArea>
      </MainWrapper>
    </>
  );
};

const DogLeftCorner = styled.div`
  position: absolute;
  left: 0;
  bottom: -67px;
  z-index: 0;

  > img:nth-child(1) {
    display: block;
  }

  > img:nth-child(2) {
    display: none;
  }

  @media (min-width: 910px) {
    left: -11vw;
    bottom: -80px;
    > img:nth-child(1) {
      display: none;
    }

    > img:nth-child(2) {
      display: block;
    }
  }
  @media (min-width: 1368px) {
    left: 0;
  }
`;
const DogRightCorner = styled.div`
  position: absolute;
  right: 0;
  bottom: -67px;
  z-index: 0;

  > img:nth-child(1) {
    display: block;
  }

  > img:nth-child(2) {
    display: none;
  }

  @media (min-width: 910px) {
    right: -11vw;
    bottom: -80px;
    > img:nth-child(1) {
      display: none;
    }

    > img:nth-child(2) {
      display: block;
    }
  }
  @media (min-width: 1368px) {
    right: 0;
  }
`;
const EmbryoContainer = styled.div`
  width: 98px;
  height: 118px;
  margin: 0 auto;
  background: url(${embryo}) no-repeat;
  @media (min-width: 910px) {
    margin-top: 30px;
    background: url(${embryoD}) no-repeat;
    width: 264px;
    height: 318px;
  }
`;
const ConnectWalletButton = styled.button`
  background: url(${connectWalletButton}) no-repeat;
  border: 0;
  width: 299px;
  height: 41px;
  transition: filter 0.252s;
  cursor: pointer;
  z-index: 1;
  position: relative;

  &:hover {
    filter: brightness(125%);
  }

  @media (min-width: 910px) {
    position: absolute;
    top: 35px;
    right: 0;
  }
`;
const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  text-align: center;

  > img {
    width: 159px;
    height: auto;
  }

  > img:nth-child(2) {
    display: none;
  }

  @media (min-width: 910px) {
    right: auto;
    > img {
      width: 333px;
    }

    > img:nth-child(1) {
      display: none;
    }

    > img:nth-child(2) {
      display: block;
      width: 333px;
      height: 161px;
      margin-left: 3%;
    }
  }
`;

const PresalePageWrapper = styled.div`
  width: 298px;
  margin: -85px auto 0 auto;
  @media (min-width: 910px) {
    width: 968px;
    background: url(${presaleDesktopSubBG}) no-repeat center;
    margin-left: -5px;
    height: 575px;
    margin-top: -100px;
  }
`;

export default PresalePage;
