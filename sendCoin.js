Moralis.initialize("JgmyeOoiFwkgfrGR1XM5b63eQrt7lr2QLbavg9lb"); // Application id from moralis.io
Moralis.serverURL = "https://mohmgexvmfvq.usemoralis.com:2053/server"; //Server url from moralis.io

let dex;

// Log in user automatically when entering the site
(async function(){
    await Moralis.initPlugins();
    dex = Moralis.Plugins.oneInch;

    await Moralis.enable();
    if(!Moralis.User.current())
      await Moralis.authenticate(); 
      currentUser = Moralis.User.current();
    console.log(currentUser)
})();

// Transfer ETH
function send_eth(){
    var eth_amount = document.getElementById('eth_ammount').value;
    var userInput = document.getElementById('friend_eth_address').value;
    Moralis.transfer({
        type:"native",
        receiver:userInput, 
        amount:Moralis.Units.ETH(eth_amount)})
}1

// Tranfer ERC20 Tokens
function send_erc20(){
    var amountOfTokens = document.getElementById('amountOfTokens').value;
    var decimals = document.getElementById('decimals').value;
    var receiver = document.getElementById('receiver').value;
    var contractAddress = document.getElementById('contractAddress').value;
    Moralis.transfer({
        type: "erc20",
        amount: Moralis.Units.Token(amountOfTokens, decimals),
        receiver: receiver,
        contractAddress: contractAddress
    })
}

//Tranfer ERC721 Tokens
function send_erc721(){
    var receiver = document.getElementById('erc721_receiver').value;
    var contractAddress = document.getElementById('erc721_contractAddress').value;
    var erc721_tokenId = document.getElementById('erc721_tokenId').value;
    Moralis.transfer({
        type: "erc721",
        receiver: receiver,
        contractAddress: contractAddress,
        tokenId: erc721_tokenId
    })
}

document.getElementById("send_eth_button").onclick = send_eth;
document.getElementById("send_erc20_button").onclick = send_erc20;
document.getElementById("send_erc721_button").onclick = send_erc721;