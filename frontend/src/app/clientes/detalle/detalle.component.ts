import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { ModalService } from './modal.service';
@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() cliente:Cliente;
  titulo:string="Detalle del paciente";
  progreso:number=0;
   fotoSeleccionada: File;

   numero:number= Math.floor(Math.random() * (100 - 87) + 87);

   

  constructor(private clienteService:ClienteService, public modalService:ModalService) { }

  ngOnInit(): void {

   
  }

  seleccionarFoto(event){
    this.fotoSeleccionada=event.target.files[0];
    this.progreso=0;
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image')<0){
      Swal.fire('Error al seleccionar imagen','El archivo debe ser una imagen','error');
      this.fotoSeleccionada=null;
    }
  }

  subirFoto(){
    if(!this.fotoSeleccionada){
      Swal.fire('Error Upload','Debe seleccionar una imagen','error');
    }else{
      this.clienteService.subirFoto(this.fotoSeleccionada,this.cliente.id)
    .subscribe(event=>{
     // this.cliente=cliente;
     if(event.type===HttpEventType.UploadProgress){
      this.progreso=Math.round((event.loaded/event.total)*100);
     }else if(event.type===HttpEventType.Response){
      let response:any=event.body;
      this.cliente=response.cliente as Cliente;
      Swal.fire('La imagen se cargó correctamente','Imagen cargada','success');
     }
      
    })
    }
    
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada=null;
    this.progreso=0;
  }

}
