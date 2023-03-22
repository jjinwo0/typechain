//strict를 활성화하면 사용할 수 없음.
//TypeScript차원에서 걸러짐.
/**
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {void}
 */
export function init(config) {
    return true;
}
/**
 *
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
