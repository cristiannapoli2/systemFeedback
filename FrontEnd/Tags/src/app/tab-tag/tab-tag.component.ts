import { Component, OnInit } from '@angular/core';
import { Tag } from '../model/tag';
import { TagService } from '../servizi/tag.service';

@Component({
  selector: 'app-tab-tag',
  templateUrl: './tab-tag.component.html',
  styleUrls: ['./tab-tag.component.css']
})
export class TabTagComponent implements OnInit{

  tags: Tag[] = [];
  message!: string;
  token!:string;
  page!:number;
  nPagine!:number;

  constructor(private crud: TagService){}


  ngOnInit(): void {
    this.page = 0;
    this.getTagImp(this.page);
  }

  getTag(): void {
    this.crud.getTags(this.page).subscribe((tag: Tag[]) => {
      this.tags = tag;
    });
  }

  getTagImp(page:number): void{
    this.crud.getTagsDim().subscribe((dim:number)=>{
      this.nPagine = Math.round(dim/5);
    })
    if(page<0){
      this.page = 0;
    }
    else if(page>this.nPagine){
      this.page = this.nPagine;
    }
    else{
      this.page = page;
    }
    this.crud.getTags(this.page).subscribe((tags:Tag[])=>{
      this.tags = tags;
      this.message = "";
    })
    if(this.tags.length==0){
      this.nPagine = this.nPagine-1;
    }
  }


}
