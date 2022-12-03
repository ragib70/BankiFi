const transferNFTUsingNFTPort = async (transferToAddress, tokenId) => {
    const url = "https://api.nftport.xyz/v0/mints/transfers/batch"
    const data = {
        "tokens": [
            {
                "transfer_to_address": transferToAddress,
                "token_id": tokenId,
                "quantity": 1
            }
        ],
        "contract_address": "0xbb3aa6009df7dda5763ed2ed77b6d19e9384d955",
        "chain": "polygon"    
    }
    const headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "Authorization": "ed2d57d9-c69c-41df-9243-c92747e80dac"
    }

    try {
        const response = await fetch(url, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(data)
        });
        const res = await response.json();
        return res;
    } catch (error) {
        console.log(error);
    }
    return "";
}

export { transferNFTUsingNFTPort };
