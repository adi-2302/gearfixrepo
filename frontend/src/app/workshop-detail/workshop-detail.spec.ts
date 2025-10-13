import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopDetail } from './workshop-detail';

describe('WorkshopDetail', () => {
  let component: WorkshopDetail;
  let fixture: ComponentFixture<WorkshopDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
