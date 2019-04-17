import { Injectable } from '@angular/core';

import { ApiModel } from '../models';
import { Adapter } from './adapter';
import { PropertyAdapter } from './property.adapter';

@Injectable({
  providedIn: 'root'
})
export class ApiDocumentationAdapter extends Adapter<ApiModel> {
  constructor(private adapter: PropertyAdapter) {
    super();
  }

  public adapt(item: any): ApiModel {
    const result = new ApiModel(
      item.name,
      item.selector,
      item.description
    );
    item.properties.map(
      (p: any) => result.properties.push(this.adapter.adapt(p))
    );

    return result;
  }
}
