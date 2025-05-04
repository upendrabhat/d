import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class AppService {
    public numberOfDominoes = 5;
    dominoes: string[] = [];

    reset(): void {
        this.dominoes = new Array(this.numberOfDominoes).fill('.');
    }
}
