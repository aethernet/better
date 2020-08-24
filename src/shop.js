import ItemUpdate from './itemUpdate'

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    return this.items.map((item) => ItemUpdate.update(item))
  }
}

export default Shop
