import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Pros} from '../models/pros';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProsSvc {

    private prosUrl = 'api/pros';  // URL to web api

    constructor(
        private http: HttpClient,
    ) {}

    /** GET Pros from the server */
    getPros(): Observable<Pros[]> {
        return this.http.get<Pros[]>(this.prosUrl);
    }



    /** GET hero by id. Will 404 if id not found */
    getSingle(id: number): Observable<Pros> {
        const url = `${this.prosUrl}/${id}`;
        return this.http.get<Pros>(url);
    }



    //////// Save methods //////////

    /** POST: add a new pros to the server */
    addPros(pros: Pros): Observable<Pros> {
        return this.http.post<Pros>(this.prosUrl, pros, httpOptions);
    }

    /** DELETE: delete the pros from the server */
    deletePros(pros: Pros | number): Observable<Pros> {
        const id = typeof pros === 'number' ? pros : pros.id;
        const url = `${this.prosUrl}/${id}`;
        return this.http.delete<Pros>(url, httpOptions);
    }

    /** PUT: update the Pros on the server */
    updatePros(pros: Pros): Observable<any> {
        return this.http.put(this.prosUrl, pros, httpOptions);
    }






}

