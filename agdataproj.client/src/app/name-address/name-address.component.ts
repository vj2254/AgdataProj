import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NameAddressService } from '../name-address.service';

@Component({
  selector: 'app-name-address',
  templateUrl: './name-address.component.html',
  styleUrls: ['./name-address.component.css']
})
export class NameAddressComponent {
  nameAddressForm: FormGroup;
  submittedData: any = null;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private nameAddressService: NameAddressService
  ) {
    this.nameAddressForm = this.fb.group({
      name: ['', Validators.required],
      address: ['']
    });
  }

  onSubmit() {
    if (this.nameAddressForm.valid) {
      this.nameAddressService.submitNameAddress(this.nameAddressForm.value)
        .subscribe({
          next: (response) => {
            this.submittedData = response;
            console.log('Data submitted successfully:', response);
            this.successMessage = 'Form submitted successfully!';
          },
          error: (err) => {
            console.error('Error submitting data', err);
            this.errorMessage = 'There was an issue submitting the form. Please try again.';
          }
        });
    }
  }
}
