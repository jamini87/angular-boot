import {EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {PageContainer} from '@angular-boot/util';
import {ActivatedRoute, Router} from '@angular/router';
import {ListComponentData} from './list-component-data';
import {ListQueryParam} from './list-query-param';
import {ListMode} from './list-mode.enum';
import {BaseAnyComponentSeven} from './base-any-component-seven';

export abstract class BaseListComponentSeven<RouteParamClazz, QueryParamClazz extends ListQueryParam,
  ComponentDataClazz extends ListComponentData<T, RouteParamClazz, QueryParamClazz>, T>
  extends BaseAnyComponentSeven<RouteParamClazz, QueryParamClazz> implements OnChanges {

  protected firstOnThisRoute: boolean;

  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              public routeParamClazzType: (new () => RouteParamClazz),
              public queryParamClazzType: (new () => QueryParamClazz)) {
    super(activatedRoute, router, routeParamClazzType, queryParamClazzType);
    this.firstOnThisRoute = true;
  }

  MyListMode = ListMode;
  @Input() public selectedList: T[] = [];

  // @Input() public getListOnCallback: Function;
  abstract getListOnCallback(): Function;
  abstract getComponentData(): ComponentDataClazz;
  protected _listMode: ListMode;
  get listMode() {
    return this._listMode;
  }

  @Input()
  set listMode(val) {
    switch (val) {
      case ListMode.DEFAULT:
        this.onDefaultMode();
        break;
      case ListMode.CHOOSE_ONE:
        this.onChooseOneMode();
        break;
      case ListMode.CHOOSE_MULTI:
        this.onChooseMultiMode();
        break;
    }
    this._listMode = val;
  }


  protected _triggerData: boolean;
  get triggerData(): boolean {
    return this._triggerData;
  }

  @Input()
  set triggerData(value: boolean) {
    if (this._triggerData !== value) {
      this.getList();
      this._triggerData = value;
    }
  }


  protected _itemPage: PageContainer<T>;
  get itemPage() {
    return this._itemPage;
  }

  @Input()
  set itemPage(val) {
    console.log('itemPage---------------->', val);
    this.getComponentData().itemPage = val;
    if (this.listMode === ListMode.CHOOSE_MULTI) {
      this.getComponentData().itemPage.content.forEach((item, i) => {
        if (!isNullOrUndefined(this.selectedList)) {
          if (this.selectedList.includes(item)) {
            item['selected'] = true;
          }
        }
      });
    }
  }


  @Output() selectedItem: EventEmitter<T> = new EventEmitter();
  @Output() deSelectedItem: EventEmitter<T> = new EventEmitter();

  abstract onDefaultMode();

  abstract onChooseOneMode();

  abstract onChooseMultiMode();

  abstract getListSelf(optionsOfGetList?: any);

  abstract getListRemoteArg(optionsOfGetList?: any);

  abstract chooseSelectedItemForEdit(item: T);

  abstract chooseSelectedItemForView(item: T);

  abstract deleteItem(item: T);

  abstract onChangedTerm();

  getListRemote(optionsOfGetList?: any) {
    this.getListOnCallback()(this.getListRemoteArg(optionsOfGetList));
  }

  getList(optionsOfGetList?: any) {
    this.getComponentData().itemPage = new PageContainer();
    console.log(this.getComponentData().itemPage);
    if (isNullOrUndefined(this.getListOnCallback())) {
      this.getListSelf(optionsOfGetList);
    } else {
      this.getListRemote(optionsOfGetList);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  protected abstract _setToQueryParams(queryParam);

  onChangeSize(event) {
    this.getComponentData().queryParam.paging.size = event.target.value;
    this.getComponentData().queryParam.paging.page = 0;
    this._setToQueryParams(this.getComponentData().queryParam);
  }

  initiatePagination(value?: { page?: number, size?: number, indicatorCount?: number }) {
    this.getComponentData().queryParam.paging.page =
      this.getComponentData().queryParamReal.paging.page ||
      !isNullOrUndefined(value) && !isNullOrUndefined(value.page) ? value.page : 0;
    this.getComponentData().queryParam.paging.size =
      this.getComponentData().queryParamReal.paging.size ||
      !isNullOrUndefined(value) && !isNullOrUndefined(value.size) ? value.size : 5;
    this.getComponentData().indicatorCount =
      !isNullOrUndefined(value) && !isNullOrUndefined(value.page) ? value.indicatorCount : 5;
  }

  resetPagination(value?: { page?: number, size?: number, indicatorCount?: number }) {
    this.getComponentData().queryParam.paging.page =
      !isNullOrUndefined(value) && !isNullOrUndefined(value.page) ? value.page : 0;
    this.getComponentData().queryParam.paging.size =
      !isNullOrUndefined(value) && !isNullOrUndefined(value.size) ? value.size : 5;
    this.getComponentData().indicatorCount =
      !isNullOrUndefined(value) && !isNullOrUndefined(value.page) ? value.indicatorCount : 5;
  }

  setCurrentPage(page) {
    if (this.getComponentData().queryParamReal.paging.page !== page) {
      this.getComponentData().queryParam.paging.page = page;
      this._setToQueryParams(this.getComponentData().queryParam);
    }
  }

  hardChangeQueryParamReal(queryParam: QueryParamClazz) {
    this.getComponentData().queryParamReal = JSON.parse(JSON.stringify(queryParam));
  }

  hardSyncQueryParamReal() {
    this.getComponentData().queryParamReal = JSON.parse(JSON.stringify(this.getComponentData().queryParam));
  }

  defaultOnReceiveQueryParam(queryParam: any, optionsOfGetList?: any): any {
    if (this.getComponentData().queryParamReal.paging.page !== queryParam.paging.page ||
      this.getComponentData().queryParamReal.paging.size !== queryParam.paging.size) {
      if (this.firstOnThisRoute === false) {
        if (!isNullOrUndefined(queryParam.paging.page)) {
          this.getComponentData().queryParamReal.paging = JSON.parse(JSON.stringify(queryParam.paging));
        }

        /**
         * Should remove next line
         */
        this.getList(optionsOfGetList);
      } else {
        this.firstOnThisRoute = false;
      }
    }
    if (this.getComponentData().queryParamReal.itemId !== queryParam.itemId) {
      this.getComponentData().queryParamReal.itemId = queryParam.itemId;
    }
  }

  defaultOnReceiveRouteParam() {
    this.firstOnThisRoute = true;
  }

  abstract sortify(event);

  defaultSortify(sortings, event) {
    console.log(event.target.attributes.field);
    console.log(event.target.attributes.sortdirection);
    switch (event.target.attributes.sortdirection) {
      case 'null':
        event.target.attributes.sortdirection = 'asc';
        sortings = [];
        sortings.push({sort: [event.target.attributes.field.value, 'asc']});
        break;
      case 'asc':
        event.target.attributes.sortdirection = 'desc';
        sortings = [];
        sortings.push({sort: [event.target.attributes.field.value, 'desc']});
        break;
      case 'desc':
        event.target.attributes.sortdirection = 'null';
        sortings = [];
        break;
      default:
        event.target.attributes.sortdirection = 'asc';
        sortings = [];
        sortings.push({sort: [event.target.attributes.field.value, 'asc']});
        break;
    }
    return sortings;
  }

  protected processPage(optionsOfGetList?: any) {
    if (this.getComponentData().itemPage.content.length <= 0) {
      if (this.getComponentData().itemPage.last) {
        if (this.getComponentData().queryParamReal.paging.page > 0) {
          this.getComponentData().queryParam.paging.page--;
          this._setToQueryParams(this.getComponentData().queryParam);
        }
      } else {
        this.getList(optionsOfGetList);
      }
    }
  }
}
