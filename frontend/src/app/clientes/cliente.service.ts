import { Injectable } from "@angular/core";
import { formatDate, DatePipe } from "@angular/common";

import {Cliente} from './cliente';
import { Observable,of, throwError } from "rxjs";

//import {CLIENTES} from './clientes.json';

import { HttpClient,HttpEvent,HttpHeaders, HttpRequest } from "@angular/common/http";
import {map, catchError, tap} from 'rxjs/operators';
import Swal from "sweetalert2";

import { Router } from "@angular/router";

@Injectable()
export class ClienteService{

    private urlEndPoint='http://localhost:8080/api/clientes';
    private HttpHeaders=new HttpHeaders({'Content-type':'application/json'});
    constructor(private http:HttpClient, private router:Router){ }

    getClientes(page:number):Observable<any>{
        return this.http.get(this.urlEndPoint+'/page/'+page).pipe(
            tap((response:any)=>{
                
                console.log('ClienteService: tap 1');
                (response.content as Cliente[]).forEach(cliente=>{
                    console.log(cliente.nombre);
                });
            }),
            map( (response:any) =>{
                (response.content as Cliente[]).map(cliente=>{
                    cliente.nombre=cliente.nombre.toUpperCase();
                    return cliente;
                });
                return response;
               
                  //  let datePipe=new DatePipe('es');
                   // cliente.createAt=datePipe.transform(cliente.createAt,'EEEE dd,MMMM yyyy');//formatDate(cliente.createAt,'dd-MM-yyyy','en-US');
                    
            }),
            tap(response=>{
                console.log('ClienteService: tap 2');
                (response.content as Cliente[]).forEach(cliente=>{
                    console.log(cliente.nombre);
                })
            }),
            
        );
    }

    create(cliente: Cliente) : Observable<any>{
        return this.http.post<any>(this.urlEndPoint,cliente,{headers: this.HttpHeaders}).pipe(
            catchError(e=>{

                if(e.status==400){
                    return throwError(e);
                }
                console.error(e.error.mensaje);
                Swal.fire(e.error.mensaje,e.error.error,'error');
                return throwError(e);
            })
        )
    }

    getCliente(id):Observable<Cliente>{
        return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
            catchError(e=>{
                this.router.navigate(['/clientes']);
                console.error(e.error.mensaje);
                Swal.fire('Error al editar',e.error.mensaje,'error');
                return throwError(e);
            })
            
        );
    }

    update(cliente:Cliente):Observable<any>{
        return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers:this.HttpHeaders}).pipe(
            catchError(e=>{
                console.error(e.error.mensaje);
                Swal.fire(e.error.mensaje,e.error.error,'error');
                return throwError(e);
            })
        )
    }

    delete(id:number):Observable<Cliente>{
        return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers:this.HttpHeaders}).pipe(
            catchError(e=>{
                console.error(e.error.mensaje);
                Swal.fire(e.error.mensaje,e.error.error,'error');
                return throwError(e);
            })
        )
    }

    subirFoto(archivo:File, id):Observable<HttpEvent<{}>>{
        let formData=new FormData();
        formData.append("archivo",archivo);
        formData.append("id",id);

        const req= new HttpRequest('POST',`${this.urlEndPoint}/upload`,formData,{
            reportProgress:true
        })
        return this.http.request(req);
    }
}