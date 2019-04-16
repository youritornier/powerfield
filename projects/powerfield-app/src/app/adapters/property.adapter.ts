import { Injectable } from '@angular/core';

import { Adapter } from './adapter';
import { PropertyModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PropertyAdapter extends Adapter<PropertyModel> {
  public adapt(item: any): PropertyModel {
    const result = new PropertyModel(
      item.name,
      item.description
    );

    return result;
  }
}
