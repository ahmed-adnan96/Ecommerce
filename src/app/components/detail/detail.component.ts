import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProuctsService } from 'src/app/services/proucts.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  idProd: string | null = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProuctsService: ProuctsService
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.idProd = param.get('hamada');
      },
    });
    this._ProuctsService.getSpecificProduct(this.idProd).subscribe({
      next: (prod) => {
        console.log(prod.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
