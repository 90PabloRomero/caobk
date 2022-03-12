import MetaMaskOnboarding from "@metamask/onboarding";

const forwarderOrigin = "http://localhost:9010";

const initialize = () => {
  const { ethereum } = window;

  //Basic Actions Section
  const onboardButton = document.getElementById("connectButton");
  const getAccountsButton = document.getElementById("getAccounts");
  const getAccountsResult = document.getElementById("getAccountsResult");

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

  //This will start the onboarding proccess
  const onClickInstall = () => {
    onboardButton.innerText = "Onboarding in progress";
    onboardButton.disabled = true;
    //On this object we have startOnboarding which will start the onboarding process for our end user
    onboarding.startOnboarding();
  };

  const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error(error);
    }
  };

  const MetaMaskClientCheck = () => {
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      onboardButton.innerText = "Click here to install MetaMask!";
      //When the button is clicked we call th is function
      onboardButton.onclick = onClickInstall;
      //The button is now disabled
      onboardButton.disabled = false;
    } else {
      //If it is installed we change our button text
      onboardButton.innerText = "";
      //When the button is clicked we call this function to connect the users MetaMask Wallet
      onboardButton.onclick = onClickConnect;
      //The button is now disabled
      onboardButton.disabled = false;
    }
  };
  //We create a new MetaMask onboarding object to use in our app

  MetaMaskClientCheck();
  //Eth_Accounts-getAccountsButton
  getAccountsButton.addEventListener("click", async () => {
    //we use eth_accounts because it returns a list of addresses owned by us.
    const accounts = await ethereum.request({ method: "eth_accounts" });
    //We take the first address in the array of addresses and display it
    getAccountsResult.innerHTML = accounts[0] || "Not able to get accounts";
  });
};
window.addEventListener("DOMContentLoaded", initialize);
