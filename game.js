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
grassTile.src = './assets/grass_tile_16x16.png'
dirtTile.src = './assets/dirt_tile_16x16.png'
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
}
const buildTiles = (xTiles, yTiles) => {
  const tiles = []
  for (let x = 0; x < xTiles; x++) {
    for (let y = 0; y < yTiles; y++) {
      tiles.push({ x: x * 16, y: y * 16, type: 'grassTile' })
    }
  }
  return tiles
}
// ✒️ Draw the tiles for the background
const drawTiles = tiles => {
  tiles.forEach(tile => {
    const image = tile.type === 'grassTile' ? grassTile: dirtTile
    context.drawImage(image, tile.x, tile.y)
    // debugger
  })
}

// 🔥 Game loop
const loop = () => {}
// ⌛ Wait till document is loaded to initialize
document.addEventListener('DOMContentLoaded', init)
