import { HttpClient } from "@angular/common/http";
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";

export class CoreService<T> {

    protected http: HttpClient;
    protected snackBar : MatSnackBar;
    private url: string;

    constructor(http: HttpClient, url: string, snackBar: MatSnackBar){
        this.http = http;
        this.snackBar = snackBar;
        this.url = url;
    }

    //exibe uma mensagem para o usuário
    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'x', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: isError ? 'error' : 'success',
        });
    }

    //obtém uma lista de elementos
    public getLista() : Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }

    //obtém um item pelo id
    public getItem(id: string) : Observable<T> {
        
        const url_id = `${this.url}/${id}`;
        return this.http.get<T>(url_id);
    }


    //inclui um elemento
    public postItem(item: T) : Observable<T> {
        return this.http.post<T>(this.url, item)
        .pipe(
            map(obj => obj),
            catchError(e => {
                this.showMessage('Ocorreu um erro na inclusão', true);
                return EMPTY;
            })
            );
    }

    //alteração de um elemento
    public putItem(item: T, id: string) : Observable<T> {
        const url_id = `${this.url}/${id}`;
        return this.http.put<T>(url_id, item);
    }

    public deleteItem(id: string) : Observable<T> {
        
        const url_id = `${this.url}/${id}`;
        return this.http.delete<T>(url_id);
    }    

}
