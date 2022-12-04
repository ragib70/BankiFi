const getOptimalPlatformToSwap = async () => {
    const quickswap_url = "https://quickswap-ethindia.powerloom.io/api/v2-pairs";
    const uniswap_url = "https://uniswapv2-ethindia.powerloom.io/api/v2-pairs";
    const sushiswap_url = "https://sushiswap-ethindia.powerloom.io/api/v2-pairs";

    const response1 = await fetch(quickswap_url);
    const quickswap_results = await response1.json();
    let quickswap_USDC_WETH_APY = 0;
    quickswap_results.forEach(element => {
        if (element.name == 'USDC-WETH') {
            quickswap_USDC_WETH_APY = (Number(element.fees_24h.split('$')[1].replace(/,/g, '')) * 365 / Number(element.liquidity.split('$')[1].replace(/,/g, ''))) * 100;
            return;
        }
    });
    
    const response2 = await fetch(uniswap_url);
    const uniswap_results = await response2.json();
    let uniswap_USDC_WETH_APY = 0;
    uniswap_results.forEach(element => {
        if (element.name == 'USDC-WETH') {
            uniswap_USDC_WETH_APY = (Number(element.fees_24h.split('$')[1].replace(/,/g, '')) * 365 / Number(element.liquidity.split('$')[1].replace(/,/g, ''))) * 100;
            return;
        }
    });

    const response3 = await fetch(sushiswap_url);
    const sushiswap_results = await response3.json();
    let sushiswap_USDC_WETH_APY = 0;
    sushiswap_results.forEach(element => {
        if (element.name == 'USDC-WETH') {
            sushiswap_USDC_WETH_APY = (Number(element.fees_24h.split('$')[1].replace(/,/g, '')) * 365 / Number(element.liquidity.split('$')[1].replace(/,/g, ''))) * 100;
            return;
        }
    });
    
    console.log(Math.max(quickswap_USDC_WETH_APY, uniswap_USDC_WETH_APY, sushiswap_USDC_WETH_APY));

}
export {getOptimalPlatformToSwap}