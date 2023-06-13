import {UnixFS} from 'ipfs-unixfs'; // @4.0.3

import pkg from 'ipld-dag-pb';
const {DAGNode} = pkg;


async function getHash(text) {
    // https://stackoverflow.com/a/58036365/3609568
    const data = Buffer.from("Hello World")
    const file = new UnixFS({data})
    const node = new DAGNode(file.marshal())
    const link = await node.toDAGLink()
    const cid = link.Hash

    return cid.toV0().toString();
}

export {getHash};
