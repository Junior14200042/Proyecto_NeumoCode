import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  public cliente: Cliente=new Cliente();
  public titulo:string="Registrar Cliente";
  public errores:string[];

  constructor(private clienteService: ClienteService, private router:Router
    , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }
  cargarCliente():void{
    this.activatedRoute.params.subscribe(params =>{
      let id=params['id'];
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente)=>this.cliente=cliente);
        console.log("hola");
      }
    })

  }

  public create():void{
    this.clienteService.create(this.cliente).subscribe(
      json => {
        this.router.navigate(["/clientes"])
        Swal.fire('Nuevo cliente',`${json.mensaje} : ${json.cliente.nombre} `,'success');
      },
      err=>{
        this.errores=err.error.errores as string[];
        console.error('Código del error desde el backend: '+err.status);
        console.error(err.error.errors);
      }
    )
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe(json=>{
      this.router.navigate(['/clientes'])
      Swal.fire('Cliente actualizado',`${json.mensaje}: ${json.cliente.nombre} actualizado con éxito`,'success')
    },
      err=>{
        this.errores=err.error.errores as string[];
        console.error('Código del error desde el backend: '+err.status);
        console.error(err.error.errors);
      }
    )
  }

}
