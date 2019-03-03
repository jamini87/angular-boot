/**
 * Created by Jafar Amini in March 2018.
 */
export class Interaction {
  public static trackChange(changes) {
    let changeLog: string[] = [];
    console.log('-----------------------<changes>');
    console.log('changes: ', changes);
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    changeLog.push(log.join(', '));
    console.log('***          |||<changeLog>|||          ***')
    console.log('changeLog ', changeLog);
    console.log('***          |||</changeLog>|||          ***')
    console.log('-----------------------</changes>');
  }
}
