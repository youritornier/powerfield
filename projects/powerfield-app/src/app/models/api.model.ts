import { PropertyModel } from './property.model';

export class ApiModel {
  public description: string;
  public name: string;
  public selector: string;
  public properties: Array<PropertyModel>;

  constructor(name: string, selector: string, description: string) {
    this.name = name;
    this.selector = selector;
    this.description = description;
    this.properties = new Array();
  }
}
