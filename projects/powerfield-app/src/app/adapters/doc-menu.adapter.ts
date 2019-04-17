import { Injectable } from '@angular/core';

import { Adapter } from './adapter';
import { DocMenuModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DocMenuAdapter extends Adapter<DocMenuModel> {
  public adapt(item: any): DocMenuModel {
    const result = new DocMenuModel(item.type);
    item.names.map(name => result.names.push(name));

    return result;
  }
}
