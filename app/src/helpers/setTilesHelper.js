export default (diff) => {
    let arr, emptyTiles, bombs, i

    switch (diff) {
        case 'easy':
            arr = new Array(81)

            emptyTiles = Math.floor(Math.random() * 10 + 10)
            i = emptyTiles

            const randomNumber = Math.floor(Math.random() * arr.length)

            arr.splice(randomNumber, 1, 'empty')
            i--

            bombs = Math.floor(Math.random() * 10 + 5)

            return arr
    }
}