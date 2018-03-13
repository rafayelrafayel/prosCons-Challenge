import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Pros} from '../../models/pros';

import {ProsSvc} from '../../services/ProsSvc';

@Component({
    selector: 'app-pros-detail',
    templateUrl: './pros-detail.component.html',
    styleUrls: ['./pros-detail.component.css']
})
export class ProsDetailComponent implements OnInit {
    @Input() pros: Pros;

    constructor(
        private route: ActivatedRoute,
        private prosSvc: ProsSvc,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getPro();
    }

    getPro(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.prosSvc.getSingle(id)
            .subscribe(pros => this.pros = pros);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.prosSvc.updatePros(this.pros)
            .subscribe((data) => {
                this.goBack()
            });
    }
}
