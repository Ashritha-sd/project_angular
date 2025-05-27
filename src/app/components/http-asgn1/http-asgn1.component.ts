import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPencil} from '@fortawesome/free-solid-svg-icons/faPencil';
import { faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-asgn1',
  imports: [FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './http-asgn1.component.html',
  styleUrl: './http-asgn1.component.css'
})
export class HttpAsgn1Component {
  userArr:any;
  faTrash=faTrash;
  faPencil=faPencil;
  faSpinner=faSpinner;
  isLoading:boolean=false;
  isEditMode:boolean=false;
  userForm = {
  id: null as number | null,
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  sal: ''
};
  constructor(private userService:UserService){}
  ngOnInit(){
    this.loadUsers();
  }
  loadUsers(){
    this.isLoading=true;
    this.userService.fetchUserData().subscribe((users)=>{
    this.userArr=users;
    this.isLoading = false;
  });
  }
  deleteConfirmation(id:number){
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
  editConfirmation(user: any){
    this.userForm = { ...user };
    this.isEditMode = true;
  }
  submitForm(){
    if (this.isEditMode) {
      this.userService.updateUser(this.userForm).subscribe(() => {
        this.resetForm();
        this.loadUsers();
      });
    } 
    else {
      //console.log("Adduser");
      //const newUser = { ...this.userForm };
      // Only assign ID if it's a new user
      this.userForm.id = this.getNextUserId();
      //console.log(newUser);
      this.userService.addUser(this.userForm).subscribe(() => {
        this.resetForm();
        this.loadUsers();
      });
    }
  }
  resetForm(){
    this.userForm = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  sal: ''
};
 this.isEditMode = false;
  }
  getNextUserId() {
  if (!this.userArr || this.userArr.length === 0) {
    return 1;
  }
  const ids = this.userArr.map((user: { id: any; }) => user.id);
  return Math.max(...ids) + 1;
}
}
