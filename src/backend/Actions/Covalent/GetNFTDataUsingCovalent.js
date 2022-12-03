const getNFTDataUsingCovalent = async () => {
    const chain_id = "137"; // polygon 137, goerli 5
    const nft_contract_address = "0xbb3aa6009df7dda5763ed2ed77b6d19e9384d955";
    const url = "https://api.covalenthq.com/v1/"+ chain_id +"/tokens/"+ nft_contract_address +"/nft_token_ids/?key=ckey_4b5cf46e89224008933b91e9c47";

    const response = await fetch(url);
    const results = await response.json();
    return results.data.items;
}

export { getNFTDataUsingCovalent };
