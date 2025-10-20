import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingComponent } from '../booking/booking';
import { WorkshopService } from '../services/workshop.service';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'WorkshopDetail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule],
  templateUrl: './workshop-detail.html',
  styleUrls: ['./workshop-detail.css']
})
export class WorkshopDetail implements OnInit {
  workshop: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private workshopService: WorkshopService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.workshopService.getWorkshopById(id).subscribe(workshop => {
        this.workshop = workshop;
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/workshops']);
  }

  openBookingDialog(): void {
    const dialogRef = this.dialog.open(BookingComponent, {
      width: '400px',
      data: { workshop: this.workshop }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open(result.message, 'Close', {
          duration: 3000,
          panelClass: result.success ? 'success-snackbar' : 'error-snackbar'
        });
      }
    });
  }
}