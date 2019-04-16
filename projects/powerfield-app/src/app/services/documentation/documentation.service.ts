import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DocumentationModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  private baseUrl = './assets/data.json';

  constructor(private http: HttpClient) { }

  public getByDirectiveName(directiveName: string): Observable<DocumentationModel> {
    return this.getAll().pipe(
      map(data => data.find(
        d => d.name.toUpperCase() === directiveName.toUpperCase()
      ))
    );
  }

  public getAll(): Observable<Array<any>> {
    return this.http
      .get<any>(this.baseUrl)
      .pipe(map(data => data.docs));
  }
}
