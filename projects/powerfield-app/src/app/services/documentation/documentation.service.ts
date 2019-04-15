import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DocumentationModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  constructor(private http: HttpClient) { }

  public getByDirectiveName(directiveName: string): Observable<DocumentationModel> {
    return this.getAll().pipe(
      map(data => data.find(d => d.name === directiveName))
    );
  }

  public getAll(): Observable<any> {
    return this.http
      .get<Array<any>>('./assets/data.json')
      .pipe(map(data => data));
  }
}
