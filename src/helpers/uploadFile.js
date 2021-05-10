require('dotenv').config();
const pinataApiKey ='522b6e9682b67784e11a'; //process.env.pinataApiKey; //
const pinataSecretApiKey = '6d15739287b2ac35102c2a55c0d98116da1094ba80272f740336defe3696cdc5'; //process.env.pinataSecretApiKey; //
const axios = require("axios");
const FormData = require("form-data");


async function pinFileToIPFS(file){
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    console.log(file)
    let blob = await fetch(file).then(r => r.blob());
    data.append("file",blob);
    /*  data.append("file", fs.createReadStream(file));*/
    const res = await axios.post(url, data, {
        maxContentLength: "Infinity",
        headers: {
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
            "pinata_api_key": pinataApiKey,
            "pinata_secret_api_key": pinataSecretApiKey,
        },
    });
    console.log(res.data);
    return res.data.IpfsHash;
};

export default pinFileToIPFS;