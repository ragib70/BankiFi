const getNFTDataUsingCovalent = async () => {
  const chain_id = "137"; // polygon 137, goerli 5
  const nft_contract_address = "0xbb3aa6009df7dda5763ed2ed77b6d19e9384d955";
  const url =
    "https://api.covalenthq.com/v1/" +
    chain_id +
    "/tokens/" +
    nft_contract_address +
    "/nft_token_ids/?key=ckey_4b5cf46e89224008933b91e9c47";

  const response = await fetch(url);
  const results = await response.json();
  return results.data.items;
};

const getTokenIDsUsingCovalent = async (address) => {
  const chain_id = "137"; // polygon 137, goerli 5
  const url =
    "https://api.covalenthq.com/v1/" +
    chain_id +
    "/address/" +
    address +
    "/balances_v2/?key=ckey_4b5cf46e89224008933b91e9c47&quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true";

  const response = await fetch(url);
  const results = await response.json();
  let res;
  const items = results.data.items;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.contract_name == "BankiFi NFT" && item.nft_data.length > 0) {
      let result = item.nft_data;
      return result[0].token_id;
    }
  }
  return res;
};

export { getNFTDataUsingCovalent, getTokenIDsUsingCovalent };
