import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workshops',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './workshops.html',
  styleUrls: ['./workshops.css']
})
export class WorkshopsComponent implements OnInit {
  workshops = [
    {
      id: 1,
      name: 'Speed Auto Care',
      location: 'Chennai',
      services: ['Oil Change', 'Brake Repair', 'Tire Replacement'],
      image: 'assets/workshops/image1.jpeg',
      description: 'Premier auto service center specializing in quick maintenance and repairs.'
    },
    {
      id: 2,
      name: 'GearUp Garage',
      location: 'Bangalore',
      services: ['Engine Tuning', 'Battery Replacement', 'General Checkup'],
      image: 'assets/workshops/image2.jpeg',
      description: 'Expert mechanics providing comprehensive vehicle maintenance and performance tuning.'
    },
    {
      id: 3,
      name: 'Precision Motors',
      location: 'Mumbai',
      services: ['Wheel Alignment', 'AC Service', 'Electrical Repairs'],
      image: 'assets/workshops/image3.jpeg',
      description: 'Specialized workshop focusing on precision repairs and advanced diagnostics.'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  viewWorkshopDetails(id: number): void {
    this.router.navigate(['/workshops', id]);
  }
}