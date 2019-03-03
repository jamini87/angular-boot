/**
 * Created by Jafar Amini in March 2018.
 */
import {OnChanges, SimpleChange} from '@angular/core';
import {BaseComponentFive} from './base-component-five';
import {ActivatedRoute} from '@angular/router';
import {ModelContainer} from '../shared/model-container';

export abstract class BaseViewComponentFive<T, Prefix> extends BaseComponentFive implements OnChanges {
  receiveData() {
    this._ActivatedRoute.data
      .subscribe((data: { modelContainer: ModelContainer<T> }) => {
        // console.log(data);
        this.onReceiveRouteParam(data.modelContainer.routeParams);
        this.onReceiveQueryParam(data.modelContainer.queryParams);
        this.applyMode(data.modelContainer.item);
      });
  }
  abstract onReceivedItem(item: any);
  abstract onChanges(obj: any);

  constructor(protected featurePrefix: Prefix,
              protected _ActivatedRoute: ActivatedRoute) {
    super(_ActivatedRoute);

      }
      // recieveData() {
      //   this._ActivatedRoute.data
      //     .subscribe((data: { modelContainer: ModelContainer<Object> }) => {
      //       // console.log(data);
      //       this.applyMode(data.modelContainer.actionMode, data.modelContainer.item);
      //     });
      // }
  // lookQueryParams() {
  //   this._ActivatedRoute.queryParams.subscribe((params) => {
  //     const target = params['target'];
  //     const actionMode = params['actionMode'];
  //     const itemId = params['itemId'];
  //     switch (target) {
  //       case 'action':
  //         this.onReceivedItemId(itemId);
  //         break;
  //     }
  //   });
  // }

  applyMode(item: any) {
    this.onReceivedItem(item);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    // CommonDevTools.Interaction.trackChange(changes);
    // if (!isNullOrUndefined(this.actionMode_In)) {
    //   this.applyMode(this.actionMode_In);
    // }
    // if (changes.hasOwnProperty('itemId_In') &&
    //   !isNullOrUndefined(this.itemId_In)
    // ) {
    //   this.onReceivedItemId(this.itemId_In);
    //
    // }
    // this.onChanges(null);
  }
}
