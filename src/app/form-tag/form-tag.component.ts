import { Component, OnInit } from '@angular/core';
import { Tag } from '../model/tag';
import { TagService } from '../servizi/tag.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-form-tag',
  templateUrl: './form-tag.component.html',
  styleUrls: ['./form-tag.component.css']
})
export class FormTagComponent implements OnInit{

  message!: string;
  tag: Tag = new Tag();
  tags:Tag[]=[]
  idTag!: number;

  constructor(private crud: TagService,private activatedRoute: ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    this.idTag = this.activatedRoute.snapshot.params ['id'];
    this.crud.getTag(this.idTag).subscribe((tags:Tag) =>{
      this.tag = tags;
    });
  }

  insertTag(tag: Tag): void {
    this.crud.addTag(tag).subscribe((message: string) => {
      this.message = message;
    });
  }
  
  getTag(id: number): any{
    this.crud.getTag(id).subscribe(( tagObs: Tag) => {this.tag = tagObs})
  }

  onSearch(): void {
    this.tag = this.getTag(this.tag.id);
  }

  resetMessage(): void{
    this.message = "";
  }

  onSubmit(): void {
    if(this.tags.length==null){
      this.crud.addTag(this.tag).subscribe((message:string)=>{
        this.message=message;
        this.router.navigate(["tabellaTag"]);
      });
      this.tag = new Tag();
    }
    else{
      this.crud.addTag(this.tag).subscribe((message:string)=>{
        this.message=message;
        this.router.navigate(["tabellaTag"]);
      })
      this.tag = new Tag();
    }
  
  }

}
