import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import { ClienteService } from './cliente.service';
import { ModalService } from './detalle/modal.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  
  clientes: Cliente[];
  paginador:any;
  clienteSeleccionado:Cliente;

  constructor(private clienteService: ClienteService,
    private activatedRouted:ActivatedRoute, private modalService:ModalService) { }

  ngOnInit(): void {
    let page=0;
    this.activatedRouted.paramMap.subscribe(params=>{
      let page:number=+params.get('page');

      if(!page){
        page=0;
      }

      this.clienteService.getClientes(page).pipe(
        tap(response=>{
          
          console.log('ClientesComponent: tap 3');
          (response.content as Cliente[]).forEach(cliente=>{
            console.log(cliente.nombre);
          });
        })
      )
      .subscribe(response=>{this.clientes=response.content as Cliente[]
        this.clientes=response.content as Cliente[];
        this.paginador=response;
      
      });

    })
    
  }
  
  delete(cliente:Cliente):void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response=>{
            this.clientes=this.clientes.filter(cli=>cli!==cliente)
          }
        )
        swalWithBootstrapButtons.fire(
          'Usuario Eliminado!',
          `Usuario ${cliente.nombre} eliminado`,
          'success'
        )
      
      }
    })
  }

  abrirModal(cliente: Cliente){
    this.clienteSeleccionado=cliente;
    this.modalService.abrirModal();
  }

}
