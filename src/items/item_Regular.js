import Tools from '../tools'

export default class RegularItemUpdate {
  static update({ name, sellIn, quality }) {
    return {
      name,
      sellIn: sellIn - 1,
      quality: Tools.qualityBounds(sellIn > 1 ? quality - 1 : quality - 2),
    }
  }
}
