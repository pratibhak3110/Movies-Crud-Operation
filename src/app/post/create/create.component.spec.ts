import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { PostService } from '../post.service';
//import { PostmockService } from "../postmock.service";

import { CreateComponent } from './create.component';

fdescribe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let p: PostService;
  let r: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule],
      providers:[
        {provide: PostService, useValue: {create: ()=>of({})}},
        {provide: Router, useValue: {navigateByUrl: ()=>{}}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    p= TestBed.inject(PostService);
    r= TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default value to form', ()=>{
    expect(component.form.value).toEqual({name:'', date:'', seen:'', img:''});
  });

  it('should check subscribe method',()=>{
    let spy= spyOn(p, 'create').and.returnValue(of({}));
    component.submit();
    expect(spy).toHaveBeenCalled();
  });

  it('should add new movie and navigate to index page', ()=>{
    let spy= spyOn(p, 'create').and.returnValue(of({}));
    let rs= spyOn(r, 'navigateByUrl')
    component.submit();
    expect(rs).toHaveBeenCalled();
  });
});
