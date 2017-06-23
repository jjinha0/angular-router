import {Component, OnInit} from "@angular/core";
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

import 'rxjs/add/operator/switchMap';
/**
 * Created by danawacomputer on 2017-06-22.
 */

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
  })

//새로운 컴포넌트를 만들면 app.module.ts에 가서 등록시켜줘야됨
export class HeroDetailComponent implements OnInit {


  // @Input()
    // hero: Hero; //@Input()을 해줘서 상위 컴포넌트에서 변수를 받아온다.
    hero: Hero;

    selectedId: number;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ){}

  //Hero초기화시키기
  //1.ngOnInit쓰려면 위에 implements먼저한다.
  ngOnInit(): void {
    this.route.params.subscribe(
      (p: Params) => this.hero = this.heroService.getHero(+p['id'])
    );

  }

  goBack(){
        this.location.back();
  }

}
