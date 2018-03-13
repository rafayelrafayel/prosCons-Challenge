import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Cons} from '../models/cons';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ConsSvc {

    private consUrl = 'api/cons';  // URL to web api

    constructor(
        private http: HttpClient,
    ) {}

    /** GET Cons from the server */
    getCons(): Observable<Cons[]> {
        return this.http.get<Cons[]>(this.consUrl);
    }



    /** GET hero by id. Will 404 if id not found */
    getSingle(id: number): Observable<Cons> {
        const url = `${this.consUrl}/${id}`;
        return this.http.get<Cons>(url);
    }



    //////// Save methods //////////

    /** POST: add a new cons to the server */
    addCons(cons: Cons): Observable<Cons> {
        return this.http.post<Cons>(this.consUrl, cons, httpOptions);
    }

    /** DELETE: delete the cons from the server */
    deleteCons(cons: Cons | number): Observable<Cons> {
        const id = typeof cons === 'number' ? cons : cons.id;
        const url = `${this.consUrl}/${id}`;
        return this.http.delete<Cons>(url, httpOptions);
    }

    /** PUT: update the Cons on the server */
    updateCons(cons: Cons): Observable<any> {
        return this.http.put(this.consUrl, cons, httpOptions);
    }






}


