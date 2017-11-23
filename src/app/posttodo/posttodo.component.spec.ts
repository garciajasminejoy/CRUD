import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttodoComponent } from './posttodo.component';

describe('PosttodoComponent', () => {
  let component: PosttodoComponent;
  let fixture: ComponentFixture<PosttodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosttodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
