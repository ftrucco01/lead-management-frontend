import { Component, OnInit } from '@angular/core';
import { LeadsService } from '../services/leads.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  leads: any[] = [];
  leadForm: FormGroup;
  errorMessage: string | null = null;
  loading: boolean = false;

  constructor(private leadsService: LeadsService, private fb: FormBuilder) {
    this.leadForm = this.fb.group({
      name: [''],
      email: [''],  
      phone: [''],
      source: ['']
    });
  }

  ngOnInit(): void {
   this.fetchLeads();
  }

  fetchLeads(): void {
    this.loading = true;
    this.leadsService.getLeads().subscribe(data => {
      this.leads = data;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  // Submit a new lead
  onSubmit(): void {
    this.errorMessage = null;
    if (this.leadForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;
    this.leadsService.submitLead(this.leadForm.value).pipe(
      catchError(error => {
        this.errorMessage = error?.error?.message ?? 'An unexpected error occurred.';
        this.loading = false;
        return of(null);
      })
    ).subscribe(response => {
      if (response) {
        this.fetchLeads();
        this.leadForm.reset();
      }
      this.loading = false;
    });
  }

  getErrorMessages(): string[] {
    return this.leadsService.getErrorMessages(this.errorMessage);
  }
}
