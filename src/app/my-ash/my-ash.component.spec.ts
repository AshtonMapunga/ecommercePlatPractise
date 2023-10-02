import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAshComponent } from './my-ash.component';

describe('MyAshComponent', () => {
  let component: MyAshComponent;
  let fixture: ComponentFixture<MyAshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
