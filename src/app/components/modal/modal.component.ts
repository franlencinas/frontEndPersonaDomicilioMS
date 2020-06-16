import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from 'src/app/servicios/persona';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppServiceService } from 'src/app/servicios/app-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('btnClose', {static : false}) btnClose : ElementRef;

  persona : Persona = {
    id       : 0 ,
    nombre   : '',
    apellido : '',
    dni      : 0
  }

  formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder, private srvc: AppServiceService) { }

  ngOnInit(): void {
    this.form();
  }

  public form(){
    console.log(
      'form():\n nombre: '  + this.persona.nombre   +
           '\n apellido: '+ this.persona.apellido +
           '\n dni: '     + this.persona.dni
    )
    this.formGroup = this.formBuilder.group({
      id       : this.srvc.persona.id,
      nombre   : this.srvc.persona.nombre,
      apellido : this.srvc.persona.apellido,
      dni      : this.srvc.persona.dni
    })
    console.log('formGroup:' +this.formGroup); 
  }

  getOne(id : number){
    console.log('getOne()')
    this.srvc.getOne(id).subscribe(data =>{
      this.persona = data
    })
  }

  resetPersona(){
    this.persona={
      id:0,
      nombre:'',
      apellido:'',
      dni:0
    }

    this.srvc.persona={
      id:0,
      nombre:'',
      apellido:'',
      dni:0
    }
  }

  postModal(persona : Persona){
    console.log('postModal()')
    this.srvc.post(persona).subscribe(data => {
      persona = data;
      this.srvc.personas.push(persona)
      this.resetPersona()
      this.formGroup.reset()
    })
  }

  updateModal(persona : Persona){
    console.log('updateModal()')
    const idPersona = persona.id;
    this.srvc.update(idPersona, persona).subscribe(data => {
      this.persona = data;
      const id       = this.persona.id;
      const nombre   = this.persona.nombre;
      const apellido = this.persona.apellido;
      const dni      = this.persona.dni;
      this.srvc.personas.map(function(dataso){
        if (dataso.id === id) {
          dataso.nombre   = nombre;
          dataso.apellido = apellido;
          dataso.dni      = dni;
        }
      })
    })
  }

  guardarPersona(formGroup: FormGroup){
    console.log('guardarPersona()')
    this.srvc.persona = formGroup.value;
    if (this.srvc.persona.id === 0) {
      this.postModal(this.srvc.persona)
    } else {
      this.updateModal(this.srvc.persona)
    }
    this.formGroup.reset()
    this.btnClose.nativeElement.click()
  }

}
