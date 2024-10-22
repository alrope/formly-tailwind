import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTailwindcssModule } from '@notiz/formly-tailwindcss';

@Component({
  selector: 'app-root',
   template: `
   <div class="container mx-auto p-4 max-w-lg">
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col space-y-4">
        <div class="flex flex-row space-x-4">
          <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
`,
standalone: true,
imports: [ReactiveFormsModule, FormlyModule, FormlyTailwindcssModule],
})
export class AppComponent {
  title = 'dev';
  form = new FormGroup({});
  model = { firstName: '', email: '' };
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'firstName',
  //     type: 'input',
  //     props: {
  //       label: 'First Name',
  //       placeholder: 'Enter your first name',
  //       required: true,
  //       className: 'input input-bordered w-full',
  //     },
  //     className: 'flex-1', // Estiliza os inputs para ocupar espaço disponível
  //   },
  //   {
  //     key: 'email',
  //     type: 'input',
  //     props: {
  //       label: 'Email',
  //       placeholder: 'Enter your email address',
  //       type: 'email',
  //       required: true,
  //       className: 'input input-bordered w-full',
  //     },
  //     className: 'flex-1', // Estiliza os inputs para ocupar espaço disponível
  //   },
  // ];  

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'flex flex-row space-x-4 items-center', // Classe para layout horizontal
      fieldGroup: [
        {
          key: 'firstName',
          type: 'input',
          props: {
            label: 'First Name',
            placeholder: 'Enter your first name',
            required: true,
            className: 'input input-bordered w-full',
          },
          className: 'flex-1', // Flex para o input ocupar espaço igual
        },
        {
          key: 'email',
          type: 'input',
          props: {
            label: 'Email',
            placeholder: 'Enter your email address',
            type: 'email',
            required: true,
            className: 'input input-bordered w-full',
          },
          className: 'flex-1', // Flex para o input ocupar espaço igual
        },
      ],
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }
}
