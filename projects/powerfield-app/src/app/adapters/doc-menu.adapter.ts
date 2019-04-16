import { Injectable } from '@angular/core';

import { Adapter } from './adapter';
import { DocMenuModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DocMenuAdapter extends Adapter<DocMenuModel> {
  public adapt(item: any): DocMenuModel {
    const docMenu = new DocMenuModel(item.type);
    item.names.map(name => docMenu.names.push(name));

    return docMenu;
  }
}
