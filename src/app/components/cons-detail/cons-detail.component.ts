import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Cons} from '../../models/cons';

import {ConsSvc} from '../../services/ConsSvc';

@Component({
    selector: 'app-cons-detail',
    templateUrl: './cons-detail.component.html',
    styleUrls: ['./cons-detail.component.css']
})
export class ConsDetailComponent implements OnInit {
    @Input() cons: Cons;

    constructor(
        private route: ActivatedRoute,
        private consSvc: ConsSvc,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getPro();
    }

    getPro(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.consSvc.getSingle(id)
            .subscribe(cons => this.cons = cons);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.consSvc.updateCons(this.cons)
            .subscribe((data) => {
                this.goBack()
            });
    }
}
