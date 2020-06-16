import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/servicios/app-service.service';
import { Persona } from "src/app/servicios/persona";
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  personas : Persona [] = [];
  persona  : Persona    = {
    id       : 0 ,
    nombre   : '',
    apellido : '',
    dni      : 0
  }

  private modal : ModalComponent;

  constructor(private srvc : AppServiceService) { }
  
  ngOnInit(): void {
    this.getAllTable();
  }

  getAllTable(){
    console.log('getAllTable()')
    this.srvc.getAll().subscribe(data => {
      this.srvc.personas = data;
      this.personas      = this.srvc.personas;
    })
  }

  deleteRow(id : number){
    console.log('deleteRow() - table')
    this.srvc.delete(id).subscribe(data => {
      this.personas.splice(this.personas.length -1)
    })
  }

  updateRow(persona : Persona){
    console.log('updateRow(persona: '+persona+')')
    this.persona = Object.assign({}, persona);
  }

}
