// 🕸️ DOM elements
const canvas = /** @type {HTMLCanvasElement} */ (
  document.querySelector('#game-canvas')
)
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight
const context = canvas.getContext('2d')

// 🌍 Global variables
const grassTile = new Image()
const dirtTile = new Image()
const treeTile = new Image()
const houseImage32x32 = new Image()
grassTile.src = './assets/grass_tile_16x16.png'
dirtTile.src = './assets/dirt_tile_16x16.png'
treeTile.src = './assets/tree_tile_16x16.png'
houseImage32x32.src = './assets/house_32x32.png'
const tileXPixels = 16 // pixels per tile horizontal
const tileYPixels = 16 // pixels per tile vertical
// determine the # of x/y tiles for the given canvas size
const xTiles = canvas.width / tileXPixels
const yTiles = canvas.height / tileYPixels

// debugger
// 🚂 Main initialization and startup of game logic
const init = () => {
  const tiles = buildTiles(xTiles, yTiles)
  drawTiles(tiles)
  drawHouse(tiles)
}
const buildTiles = (xTiles, yTiles) => {
  const tiles = []
  for (let x = 0; x < xTiles; x++) {
    for (let y = 0; y < yTiles; y++) {
      let type = Math.random() < 0.7 ? 'grassTile' : 'dirtTile'
      type = type === 'dirtTile' && Math.random() < 0.3 ? 'treeTile' : type
      tiles.push({ x: x * 16, y: y * 16, type: type })
    }
  }
  return tiles
}
// ✒️ Draw the tiles for the background
const drawTiles = tiles => {
  tiles.forEach(tile => {
    let image
    switch (tile.type) {
      case 'grassTile':
        image = grassTile
        break
      case 'dirtTile':
        image = dirtTile
        break
      case 'treeTile':
        image = treeTile
        break
    }
    context.drawImage(image, tile.x, tile.y)
    // debugger
  })
}

// 🏠 Draw house
const drawHouse = tiles => {
  xTileHouse = Math.floor(canvas.width * 0.5)
  yTileHouse = Math.floor(canvas.height * 0.5)
  context.drawImage(houseImage32x32, xTileHouse, yTileHouse)
}
// 🔥 Game loop
const loop = () => {}
// ⌛ Wait till document is loaded to initialize
document.addEventListener('DOMContentLoaded', init)
