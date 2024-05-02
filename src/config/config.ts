import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";

const mnemonic: string = "since damp catalog swap tilt butter know proud raven inch motion question maid key frozen alien target more deliver vacuum immune liberty save abandon riot";
// "canoe mule cart impulse debris bachelor pelican case rocket apart donkey blanket loan grief upper lake pyramid turtle amused amateur alcohol safe armor abandon lumber";

export function getClient(): algosdk.Algodv2 {
 let client = new algosdk.Algodv2(algodToken, server, port);
 return client;
}

export function getAccount(): algosdk.Account {
 let account = algosdk.mnemonicToSecretKey(mnemonic);
 return account;
 }