import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private goals = new BehaviorSubject<any>([
    'The init goals',
    'Another silly life goal',
    'Next goal',
  ])
  goal = this.goals.asObservable()

  constructor() {}

  changeGoal(goal: string[]) {
    this.goals.next(goal)
  }
}
