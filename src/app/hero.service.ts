import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
/**
 * Created by danawacomputer on 2017-06-23.
 */



@Injectable()
export class HeroService{
  getHeroes(): Hero[]{
    return HEROES;
  }

  getHero(id: number): Hero{
    //find함수는 뒤에 조건이 참인 최초의 값을 리턴해준다
    return this.getHeroes().find((hero) => hero.id === id);
  }

}
