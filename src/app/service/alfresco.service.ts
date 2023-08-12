import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, throwError } from 'rxjs';
import { config } from '../config';
import { NodeChildAssociationPaging, NodeEntry, TicketEntry } from '../model';


@Injectable({
  providedIn: 'root'
})
export class AlfrescoService {

  constructor(private http: HttpClient ) { }

  login(username: string, password: string) {
    return this.http.post<TicketEntry>(`${config.alfresco_auth_url}/tickets`, {
      userId: username,
      password: password
    })
    .pipe(catchError(this.handleError));
  }

  listFolderWithParentDetails(parentFolder: string) {
    return forkJoin([
      this.getNodeDetails(parentFolder),
      this.listFolder(parentFolder)
    ]);
  }

  listFolder(parentFolder: string) {
    return this.http
      .get<NodeChildAssociationPaging>(`${config.alfresco_api_url}/nodes/${parentFolder}/children?include=path`)
      .pipe(catchError(this.handleError));
  }

  getNodeDetails(nodeId: string){
    return this.http
      .get<NodeEntry>(`${config.alfresco_api_url}/nodes/${nodeId}?include=path`)
      .pipe(catchError(this.handleError));
  }

  uploadFile(formData: FormData, parentFolder = config.default_node) {
    return this.http
      .post<NodeEntry>(`${config.alfresco_api_url}/nodes/${parentFolder}/children`, formData)
      .pipe(catchError(this.handleError))
  }

  download(nodeId: string, filename: string) {
    return this.http
      .get(`${config.alfresco_api_url}/nodes/${nodeId}/content`, { responseType: 'blob' })
      .subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.style.display = 'none';
        a.href = url;
        a.download = filename;

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        a.remove();
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error( `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
