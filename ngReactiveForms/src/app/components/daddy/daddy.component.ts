import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
interface QuestionsData {
  questionA?: string | null ;
  questionB?: string | null ;
}

@Component({
  selector: 'app-daddy',
  templateUrl: './daddy.component.html',
  styleUrls: ['./daddy.component.css']
})
export class DaddyComponent {

  form:FormGroup<any>;
  dogData : QuestionsData | any;

  constructor(fb : FormBuilder){
    this.form = fb.group({
      questionA : ['',[Validators.required,this.dogValidator]],

      questionB : ['',[Validators.required,this.yesValidator]],
    });
    this.form.valueChanges.subscribe(()=>{

      this.dogData = this.form.value
      console.log(this.form.value);
    });
  }
  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     questionA: ['', [Validators.required]],
  //     questionB: ['',[Validators.required]],
  //   }, {validators: this.catValidator});

  //   this.catForm.valueChanges.subscribe(() => {
  //     this.catData = this.catForm.value;
  //   });
  // }


  myValidator(control : AbstractControl) : ValidationErrors | null {
    const qA = control.get('questionA')?.value;
    const qB = control.get('questionB')?.value;
    console.log('qA data :'+qA);
    console.log('qB data :'+qB);


    let atleastOneMistake = false;
    //check if they not empty then proceed
    if(qA != ""){
      if(qA != "dog"){
        control.get("questionA")?.setErrors({doesntLoveDogs:true});
        atleastOneMistake = true;
      }
      else{
        control.get('questionA')?.setErrors(null);
      }
    }
    //check if not empty then proceeed
    if(qB != ""){
      if(qB != "yes"){
        control.get("questionB")?.setErrors({doesntPreferDogs:true});
        atleastOneMistake = true;
      }
      else{
        control.get('questionB')?.setErrors(null);
      }
    }
    //if atleast one mistake return obj as true , else null
    return atleastOneMistake?{atleastOneMistake:true}:null;
  }

  dogValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null; // let required validator handle empty values
    }
    return value.toLowerCase() === 'dog' ? null : { doesntLoveDogs: true };
  }
  yesValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null; // let required validator handle empty values
    }
    return value.toLowerCase() === 'yes' ? null : { didntSayYes: true };
  }



}
