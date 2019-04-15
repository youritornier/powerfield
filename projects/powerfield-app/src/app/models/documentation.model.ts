import { PropertyModel } from './property.model';

export class DocumentationModel {
  public description: string;
  public directiveName: string;
  public directiveSelector: string;
  public properties: Array<PropertyModel>;

  constructor() {
    this.properties = new Array();
  }
}
