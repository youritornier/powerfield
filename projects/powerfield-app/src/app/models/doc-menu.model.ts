export class DocMenuModel {
  public type: string;
  public names: Array<string>;

  constructor(type: string) {
    this.names = new Array();
    this.type = type;
  }
}
