import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilesExplorer } from './files-explorer';
@Injectable({
	providedIn: 'root',
})
export class ApiServiceService {
	// private fileUrl = './db/db.json';

	constructor(private http: HttpClient) {

	}
	getFile(id: string): Observable<FilesExplorer> {
		return this.http.get<FilesExplorer>('/http://localhost:8080/api/items/' + id);
	}

	getFiles(): Observable<FilesExplorer[]> {
		return this.http.get<FilesExplorer[]>('/api/items/');
	}

}
