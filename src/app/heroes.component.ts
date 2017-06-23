import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";
/**
 * Created by danawacomputer on 2017-06-23.
 */


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']})


export class HeroesComponent implements OnInit{

  /*Hero type의 hero변수 만들기
   hero: Hero = {
   id: 1,
   name: 'Windstorm'
   };*/

  //heroes = HEROES; //HEROES의 data를 변수 heroes에 담기!

  heroes;
  selectedHero: Hero;

  /*함수 정의하기!
   onSelect(hero) {
   alert('hello' + hero.name);
   }*/

  //selectedHero: Hero;

  constructor(private heroService: HeroService,
  private router: Router){
    // this.heroes = heroService.getHeroes();
  }
  ngOnInit(){

    this.heroes = this.heroService.getHeroes();

  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }


  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);

  }


}
