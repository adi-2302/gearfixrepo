import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { WorkshopService } from '../workshop';

@Component({
  selector: 'app-workshop-detail',
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './workshop-detail.html',
  styleUrl: './workshop-detail.css'
})
export class WorkshopDetailComponent implements OnInit {
  workshop: any;

  constructor(
    private route: ActivatedRoute,
    private workshopService: WorkshopService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.workshopService.getWorkshop(id).subscribe(workshop => {
        this.workshop = workshop;
      });
    }
  }
}