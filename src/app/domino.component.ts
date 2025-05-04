import { Component, Input } from "@angular/core";
import { AppService } from "./app.service";

@Component({
    standalone: false,
    selector: 'app-domino',
    templateUrl: 'domino.component.html'
})

export class DominoComponent{
    constructor(public appservice: AppService){
        this.appservice.reset();
    }

    simulate():void{
        this.playAudio();
        let i = 0
        let left = 0
        while (i < this.appservice.dominoes.length && this.appservice.dominoes[i] != 'R'){
            if (this.appservice.dominoes[i] == 'L'){
                left = i;
            }
            i++;
        }
        this.setl(0,left);

        let right = true;
        let prev = i;
        for (let x  = i; x < this.appservice.dominoes.length; x++){
            if (this.appservice.dominoes[x] == 'R' && right){
                this.setr(prev+1,x);
                prev = x;
            }
            else if (this.appservice.dominoes[x] == 'R'){
                right = true;
                prev = x;
            }
            else if (this.appservice.dominoes[x] == 'L' && right){
                this.setr(prev+1, Math.ceil((x+prev)/2));
                this.setl(Math.floor((x+prev)/2) +1, x);
                prev = x;
                right = false;
            }
            else if (this.appservice.dominoes[x] == 'L'){
                this.setl(prev, x);
                prev = x;
            }
        }
        if (right){
            this.setr(prev, this.appservice.dominoes.length);
        }

    }

    setl(left:number,right:number):void{
        if (left == right)
            return;
        for (let i = left; i < right; i++){
            this.appservice.dominoes[i] = 'L'
        }
    }

    setr(left:number,right:number):void{
        if (left == right)
            return;
        for (let i = left; i < right; i++){
            this.appservice.dominoes[i] = 'R'
        }
    }

    changeDomino(i:number):void{
        if (this.appservice.dominoes[i] == 'L'){
            this.appservice.dominoes[i] = '.';
        }
        else if (this.appservice.dominoes[i] == '.'){
            this.appservice.dominoes[i] = 'R';
        }
        else if (this.appservice.dominoes[i] == 'R'){
            this.appservice.dominoes[i] = 'L';
        }
    }

    public reset():void{
        this.playReset();
        this.appservice.dominoes = new Array(this.appservice.numberOfDominoes).fill('.');
    }

    private playAudio(): void {
        const audio = document.getElementById('dominoaudio') as HTMLAudioElement;
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }

    private playReset(): void {
        const audio = document.getElementById('dominoreset') as HTMLAudioElement;
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }
}