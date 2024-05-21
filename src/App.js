import logo from './logo.svg';
import './App.css';
import Arweave from "arweave";
function App() {
  const handleClick = async () => {
    // window.open(PADOEXTENSIONDOWNLOADURL);
    const arweave = Arweave.init({
      // host: "arweave.net",
      // port: 443,
      // protocol: "https",
      host: "127.0.0.1",
      port: 1984,
      protocol: "http",
    });

    const res = await window.arweaveWallet.connect(
      // request permissions to read the active address
      [
        "ACCESS_ADDRESS",
        "ACCESS_PUBLIC_KEY",
        "ACCESS_ALL_ADDRESSES",
        "ENCRYPT",
        "DECRYPT",
        "SIGNATURE",
        "DISPATCH",
        "ACCESS_ARWEAVE_CONFIG",
        "SIGN_TRANSACTION",
      ]
    );
    debugger;
    // obtain the user's wallet address
    // const userAddress = await window.arweaveWallet.getActiveAddress();
    // console.log("Your wallet address is", userAddress);

    // // obtain the user's public key
    // const publicKey = await window.arweaveWallet.getActivePublicKey();

    // console.log("JWK.n field is:", publicKey);

    // // create public key JWK
    // const publicJWK = {
    //   e: "AQAB",
    //   ext: true,
    //   kty: "RSA",
    //   n: publicKey,
    // };
    // debugger;
    // get all wallet addresses added to ArConnect
    // const addresses = await window.arweaveWallet.getAllAddresses();
    // debugger;
    // // get all wallet names from ArConnect
    // const walletNames = await window.arweaveWallet.getWalletNames();
    // debugger;
    // create a transaction
    let transaction = await arweave.createTransaction({
      data: '<html><head><meta charset="UTF-8"><title>Hello permanent world! This was signed via ArConnect!!!</title></head><body></body></html>',
    });
    debugger;
    // // sign using arweave-js
    const signedFields = await arweave.transactions.sign(
      transaction
    );
    debugger;
    // let uploader = await arweave.transactions.getUploader(transaction);
    // while (!uploader.isComplete) {
    //   await uploader.uploadChunk();
    //   debugger;
    //   console.log(
    //     `${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`
    //   );
    // }
    // update transaction fields with the
    // signed transaction's fields
    // transaction.setSignature({
    //   id: signedFields.id,
    //   owner: signedFields.owner,
    //   reward: signedFields.reward,
    //   tags: signedFields.tags,
    //   signature: signedFields.signature,
    // });
    // debugger;
  };
  return (
    <div className="App">
      <header className="App-header">
        <button style={{ width: "80px", height: '40px' }} onClick={handleClick }>Connect</button>
      </header> 
    </div>
  );
}

export default App;
