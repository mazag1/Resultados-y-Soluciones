import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  constructor(private menuService: NbMenuService) { }
  
  goToHome() {
    this.menuService.navigateHome();
  }
  
  cargarse: boolean = true;
  
  transformar: boolean = true;

  validacion: boolean = true;

  asignar:boolean =true;

  show: boolean = true;

  ngOnInit(): void {
  }

}
