import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { WorkshopService } from '../services/workshop.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule
  ],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent {
  bookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BookingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private workshopService: WorkshopService
  ) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      mobileModel: ['', Validators.required],
      serviceType: ['', Validators.required],
      preferredDateTime: ['', Validators.required],
      notes: ['']
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const bookingData = {
        ...this.bookingForm.value,
        workshopId: this.data.workshop.id,
        workshopName: this.data.workshop.name
      };
      this.workshopService.bookAppointment(bookingData).subscribe(
        response => {
          this.dialogRef.close({ success: true, message: response.message });
        },
        error => {
          this.dialogRef.close({ success: false, message: error.error.message });
        }
      );
    }
  }
}