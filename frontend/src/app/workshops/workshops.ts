import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WorkshopService } from '../workshop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-workshops',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './workshops.html',
  styleUrl: './workshops.css'
})
export class WorkshopsComponent implements OnInit {
  workshops: any[] = [];

  constructor(private workshopService: WorkshopService) { }

  ngOnInit(): void {
    this.workshopService.getWorkshops().subscribe(workshops => {
      this.workshops = workshops;
    });
  }
}