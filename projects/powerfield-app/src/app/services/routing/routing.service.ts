import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DocMenuModel } from '../../models';
import { DocMenuAdapter } from '../../adapters';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private baseUrl = './assets/data.json';

  constructor(
    private http: HttpClient,
    private adapter: DocMenuAdapter
  ) { }

  public getAll(): Observable<Array<DocMenuModel>> {
    return this.http
      .get(this.baseUrl)
      .pipe(
        map((data: any) => this.adapter.adaptArray(data.routes))
      );
  }
}
