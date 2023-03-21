//strict를 활성화하면 사용할 수 없음.
//TypeScript차원에서 걸러짐.
export function init(config){
    return true;
}

export function exit(code){
    return code + 1;
}