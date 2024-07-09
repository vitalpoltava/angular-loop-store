import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeLoopComponent } from './native-loop.component';

describe('NativeLoopComponent', () => {
  let component: NativeLoopComponent;
  let fixture: ComponentFixture<NativeLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NativeLoopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NativeLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
