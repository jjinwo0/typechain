import * as crypto from "crypto";

interface BlockShape{
    hash:string;
    prevHash:string;
    height:number;
    data:string;
}

class Block implements BlockShape{
    public hash:string;

    constructor(
        public prevHash:string,
        public height:number,
        public data:string
    ){
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`;
        //사용할 알고리즘.암호화할 비밀번호.인코딩 방식
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class BlockChain{
    private blocks: Block[]
    constructor(){
        this.blocks = [];
    }

    private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length-1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length+1, data);
        this.blocks.push(newBlock);
    }
    public getBlocks(){
        return [...this.blocks];
    }
}

const blockchain = new BlockChain();

blockchain.addBlock("First One");
blockchain.addBlock("Second One");
blockchain.addBlock("Third One");
blockchain.addBlock("Last One");

console.log(blockchain.getBlocks());