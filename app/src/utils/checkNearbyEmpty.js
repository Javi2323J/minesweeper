import { tileOffsets } from './offsets'

export default (arr, myPosition) => {
    let hasAdjacentEmpty = false

    for (let i = 0; i < 8; i++) {
        const { colOffset, rowOffset } = tileOffsets[i]

        const anyAdjacentEmpty = arr.findIndex(tile =>
            tile.column === myPosition.column + colOffset && tile.row === myPosition.row + rowOffset && tile.type === 'e'
        )

        if (anyAdjacentEmpty > 0) {
            hasAdjacentEmpty = true

            break
        }
    }

    return hasAdjacentEmpty
}