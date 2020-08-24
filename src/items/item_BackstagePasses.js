import Tools from '../tools'

export default class BackstagePassesUpdate {
  static update({ name, sellIn, quality }) {
    return {
      name,
      sellIn: sellIn - 1,
      quality: Tools.qualityBounds(BackstagePassesUpdate.computeQuality({ sellIn, quality })),
    }
  }

  static computeQuality({ sellIn, quality }) {
    if (sellIn < 0) return 0
    if (sellIn < 6) return quality + 3
    if (sellIn < 11) return quality + 2
    return quality + 1
  }
}
