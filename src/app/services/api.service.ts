// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // se rodar em outro PC (dispositivo móvel), troque para http://SEU_IP:3000
  base = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  emitir(tipo: 'SP' | 'SG' | 'SE'): Observable<any> {
    return this.http.post<any>(`${this.base}/emitir`, { tipo });
  }

  chamar(): Observable<any> {
    return this.http.get<any>(`${this.base}/chamar`);
  }

  painel(): Observable<string[]> {
    return this.http.get<string[]>(`${this.base}/painel`);
  }
}
