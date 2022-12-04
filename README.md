The problem BankiFi solves:

In general Defi system, we identified the following flaws :

No escrow contract model exists, where the user and borrower can interface one-to-one like an order-book model, and open a position where the lender earns fixed APY, while the borrower gets a 2x loan on some appreciating asset.

In a position where any of the participants involved want to get out of the position, they would need to liquidate it at the current price resulting in an impermanent loss.

No easy way of swapping positions over a secondary marketplace.

Our project provides a platform for 2 participants to benefit each other from their assets.

Workflow :

Let's suppose a user(lender) is sitting on a pile of USDC in his wallet and wishes to earn some fixed interest. He can come to our platform and deposit 100 USDC into our platform. A user(borrower) is bullish about the market and wants to purchase 200 USDC worth of ETH, but has only 100 USDC. He can deposit 100 USDC on our platform, we will convert 100 USDC from the lender + 100 USDC from the borrower into ETH and lock in the contract. Fixed interest of say 18% is agreed upon by the borrower to the lender as his APY for a fixed duration. Once the duration completes, the locked ETH is passed to the borrower and the position is closed. For the proof of position holding, at the time of match between borrower and lender, we mint 2 ERC1155 NFTs and transfer 1 to the borrower and 1 to the lender with metadata of all the position specifics. If any of the users wish to step out of the position then instead of liquidating their position they can sell off their NFTs on a secondary marketplace, and now the NFT purchaser gets into the position and he will either pay or receive the APY.

Challenges we ran into
On opening a position between borrower and lender, the borrower is fixed a particular installment to pay the lender. The calculation of this installment based on market conditions is very complex, as we need to take care of multiple finance indicators and markup into mind. As of time constraint, we implemented a fixed APY depending upon the current price of WETH locked.

We used Covalent API for querying blockchain to get multiple onchain data like NFT token ids, NFT data etc which in many scenarios return stale data. We have added delay and added states to not progress further the function calls if the data is stale.

One challenge was to make it cross-chain. We wanted to not only use the polygon mainnet whereas other chains, so that any borrower and lenders of other chains could interact with each other to have greater match. We tried integrating Router, Connext, LiFi etc but the API's were not easy to understand considering the time constraints, so dropped the idea.

We have implemnted ENS for fetching the address from ENS name. It was not using the web3 provider we are using to interact with blockchain for signing transaction, then we used infura separately for ens for the usecase of fetching address.

BankiFi dApp:
 https://bafybeibn2iicqsdqn7hvzlq2lznjtn2xp7dri267ztyfpi2ehqznxnqn3i.ipfs.gateway.valist.io/

 Contract address:
 0xb8cC338C164849C39A6096AB0e318404Af8263cF

 NFT contract address:
 0xBB3aa6009df7dDa5763Ed2Ed77B6D19e9384D955
