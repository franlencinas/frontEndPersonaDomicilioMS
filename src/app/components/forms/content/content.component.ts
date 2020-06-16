import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/servicios/persona';
import { AppServiceService } from 'src/app/servicios/app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  personas : Persona [] = [];
  
  constructor(private srvc : AppServiceService, private rtr : Router) { }

  ngOnInit(): void {
    this.getAllContent();
  }

  getAllContent(){
    console.log('getAllContent')
    this.srvc.getAll().subscribe(data => {
      this.personas = data;
    })
  }

  deleteContent(id : number){
    console.log('deleteContent()')
    this.srvc.delete(id).subscribe(data => {
      alert('Eliminado')
      location.reload();
    })
  }

  agregarContent(idPersona : number){
    console.log('agregarContent()')
    this.rtr.navigate(['persona/' + idPersona])
  }

  updateContent(idPersona : number){
    console.log('updateContent()')
    this.rtr.navigate(['pertsona/' + idPersona]);
  }
}
