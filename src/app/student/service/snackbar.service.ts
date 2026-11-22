import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn:'root'
})

export class SnackbarService{
    constructor(
        private _matSnackBar:MatSnackBar
    ){}

    openSnackbar(msg:string){
        this._matSnackBar.open(msg,'Close',{
            horizontalPosition:'left',
            verticalPosition:'top',
            duration:3000
        })
    }
}