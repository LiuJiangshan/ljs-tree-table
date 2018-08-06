import Column from './Column'

export default class ColumnList {
  constructor (data) {
    this.data = data
    this.columns = []
    this.data.forEach(it => this.columns.push(new Column(it)))
    if (!this.columns) throw new Error('column can\'t null')
  }
}