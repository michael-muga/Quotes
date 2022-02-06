export class Quote {
    showDetails: boolean;
    constructor(public id: number, public quote: string, public author: string, public submitter: string){
        this.showDetails=false;
    }
}
