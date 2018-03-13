import {Component, OnInit} from '@angular/core';
import {Pros} from '../../models/pros';
import {Cons} from '../../models/cons';
import {ProsSvc} from '../../services/ProsSvc';
import {ConsSvc} from '../../services/ConsSvc';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    pros: Pros[] = [];
    cons: Cons[] = [];

    constructor(private prosSvc: ProsSvc, private consSvc: ConsSvc) {}

    ngOnInit() {
        this.getPros();
        this.getCons();
    }

    getPros(): void {
        this.prosSvc.getPros()
            .subscribe((pros) => {
                this.pros = pros

            });
    }

    deletePros(pros: Pros): void {
        this.pros = this.pros.filter(h => h !== pros);
        this.prosSvc.deletePros(pros).subscribe();
    }

    addPros(text: string): void {
        text = text.trim();
        if (!text) {return;}
        this.prosSvc.addPros({text} as Pros)
            .subscribe(pros => {
                this.pros.push(pros);
            });
    }
    getCons(): void {
        this.consSvc.getCons()
            .subscribe((cons) => {
                this.cons = cons

            });
    }

    deleteCons(cons: Pros): void {
        this.cons = this.cons.filter(h => h !== cons);
        this.consSvc.deleteCons(cons).subscribe();
    }

    addCons(text: string): void {
        text = text.trim();
        if (!text) {return;}
        this.consSvc.addCons({text} as Cons)
            .subscribe(cons => {
                this.cons.push(cons);
            });
    }
}
