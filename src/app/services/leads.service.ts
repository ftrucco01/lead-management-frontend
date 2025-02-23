import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getLeads(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    submitLead(lead: any): Observable<any> {
        return this.http.post(this.apiUrl, lead);
    }

    // format error messages from the api
    getErrorMessages(errorMessage: string | null): string[] {
        if (!errorMessage) return [];
        try {
            const matches = errorMessage.match(/{(.+)}/);
            if (!matches) return [errorMessage];
            return matches[1].split(',')
                .map(msg => msg.split(':')[1]?.replace(/"/g, '').trim())
                .filter(msg => msg);
        } catch {
            return [errorMessage];
        }
    }
}