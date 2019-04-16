import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiModel } from '../../models';
import { ApiDocumentationAdapter } from '../../adapters/api-documentation.adapter';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  private baseUrl = './assets/data.json';

  constructor(
    private http: HttpClient,
    private adapter: ApiDocumentationAdapter
  ) { }

  public getByDirectiveName(directiveName: string): Observable<ApiModel> {
    return this.getAll()
      .pipe(
        map(data => data.find(
          d => d.name.toUpperCase() === directiveName.toUpperCase()
        )
      )
    );
  }

  private getAll(): Observable<Array<ApiModel>> {
    return this.http
      .get<any>(this.baseUrl)
      .pipe(
        map((data: any) => this.adapter.adaptArray(data.docs))
      );
  }
}
