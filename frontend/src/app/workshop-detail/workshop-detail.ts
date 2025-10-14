import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-workshop-detail',
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './workshop-detail.html',
  styleUrl: './workshop-detail.css'
})
export class WorkshopDetailComponent implements OnInit {
  workshop: any;
  workshops = [
    {
      id: 1,
      name: 'Speed Auto Care',
      location: 'Chennai',
      services: ['Oil Change', 'Brake Repair', 'Tire Replacement', 'Engine Diagnostics', 'Suspension Work'],
      image: 'assets/workshops/image1.jpeg',
      description: 'Premier auto service center specializing in quick maintenance and repairs.',
      address: '123 Auto Street, Chennai, Tamil Nadu',
      phone: '+91 98765 43210',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
    },
    {
      id: 2,
      name: 'GearUp Garage',
      location: 'Bangalore',
      services: ['Engine Tuning', 'Battery Replacement', 'General Checkup', 'Performance Upgrades', 'Electrical System Repair'],
      image: 'assets/workshops/image2.jpeg',
      description: 'Expert mechanics providing comprehensive vehicle maintenance and performance tuning.',
      address: '456 Mechanic Road, Bangalore, Karnataka',
      phone: '+91 87654 32109',
      hours: 'Mon-Sat: 8:30 AM - 7:00 PM'
    },
    {
      id: 3,
      name: 'Precision Motors',
      location: 'Mumbai',
      services: ['Wheel Alignment', 'AC Service', 'Electrical Repairs', 'Computer Diagnostics', 'Transmission Service'],
      image: 'assets/workshops/image3.jpeg',
      description: 'Specialized workshop focusing on precision repairs and advanced diagnostics.',
      address: '789 Service Lane, Mumbai, Maharashtra',
      phone: '+91 76543 21098',
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 2:00 PM'
    }
  ];

  constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

      this.route.paramMap.subscribe(params => {

        const id = Number(params.get('id'));

        this.workshop = this.workshops.find(w => w.id === id);

      });

    }

  }