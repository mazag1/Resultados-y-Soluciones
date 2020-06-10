import { Component,  OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-miscellaneous',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class MiscellaneousComponent {
}

export class StepperComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  cincoForm: FormGroup;
  seisForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
    this.cincoForm = this.fb.group({
      cincoForm: ['', Validators.required],
    });
    this.seisForm = this.fb.group({
      seisForm: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
  onCincoSubmit() {
    this.cincoForm.markAsDirty();
  }
  onSeisSubmit() {
    this.seisForm.markAsDirty();
  }
}
