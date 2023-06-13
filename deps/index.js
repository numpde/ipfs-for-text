import {UnixFS} from 'ipfs-unixfs';

import pkg from 'ipld-dag-pb';
const {DAGNode} = pkg;


async function getHash(text) {
    // https://stackoverflow.com/a/58036365/3609568
    const data = new TextEncoder().encode(text);
    const file = new UnixFS({data})
    const node = new DAGNode(file.marshal())
    const link = await node.toDAGLink()
    const cid = link.Hash

    return cid.toV0().toString();
}

window.getHash = getHash;
