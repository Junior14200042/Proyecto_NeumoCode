import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    title:string='NeumoApp';
    router: any;
    document: any;
    

    redirigir(){
        
        window.location.href='http://localhost/login/';
    }
}

