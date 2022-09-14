import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabillentryComponent } from './tabillentry.component';

describe('TabillentryComponent', () => {
  let component: TabillentryComponent;
  let fixture: ComponentFixture<TabillentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabillentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabillentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
