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
  componentData: ComponentDataClazz;

  constructor(protected activatedRoute: ActivatedRoute,
              protected router: Router,
              protected routeParamClazzType: (new () => RouteParamClazz),
              protected queryParamClazzType: (new () => QueryParamClazz)) {
    super(activatedRoute, router, routeParamClazzType, queryParamClazzType);
  }

  MyListMode = ListMode;
  @Input() protected selectedList: T[] = [];
  @Input() protected getListOnCallback: Function;
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
    this.componentData.itemPage = val;
    if (this.listMode === ListMode.CHOOSE_MULTI) {
      this.componentData.itemPage.content.forEach((item, i) => {
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
    this.getListOnCallback(this.getListRemoteArg(optionsOfGetList));
  }

  getList(optionsOfGetList?: any) {
    this.componentData.itemPage = new PageContainer();
    console.log(this.componentData.itemPage);
    if (isNullOrUndefined(this.getListOnCallback)) {
      this.getListSelf(optionsOfGetList);
    } else {
      this.getListRemote(optionsOfGetList);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  protected abstract _setToQueryParams(queryParam);

  onChangeSize(event, queryParam) {
    queryParam.paging.size = event.target.value;
    queryParam.paging.page = 0;
    this._setToQueryParams(queryParam);
  }

  initiatePagination(componentData, value?: { page?: number, size?: number, indicatorCount?: number }) {
    componentData.queryParam.paging.page =
      componentData.queryParamReal.paging.page ||
      !isNullOrUndefined(value) && !isNullOrUndefined(value.page) ? value.page : 0;
    componentData.queryParam.paging.size =
      componentData.queryParamReal.paging.size ||
      !isNullOrUndefined(value) && !isNullOrUndefined(value.size) ? value.size : 5;
    componentData.indicatorCount =
      !isNullOrUndefined(value) && !isNullOrUndefined(value.page) ? value.indicatorCount : 5;
  }

  setCurrentPage(queryParam, page) {
    queryParam.paging.page = page;
    this._setToQueryParams(queryParam);
  }

  hardChangeQueryParamReal(componentData) {
    componentData.queryParamReal = JSON.parse(JSON.stringify(componentData.queryParam));
  }

  defaultOnReceiveQueryParam(queryParamReal, queryParam: any, optionsOfGetList?: any): any {
    if (queryParamReal.paging.page !== queryParam.paging.page ||
      queryParamReal.paging.size !== queryParam.paging.size) {
      queryParamReal.paging = JSON.parse(JSON.stringify(queryParam.paging));
      this.getList(optionsOfGetList);
    }
    if (queryParamReal.itemId !== queryParam.itemId) {
      queryParamReal.itemId = queryParam.itemId;
    }
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
    if (this.componentData.itemPage.content.length <= 0) {
      if (this.componentData.itemPage.last) {
        if (this.componentData.queryParamReal.paging.page > 0) {
          this.componentData.queryParam.paging.page--;
          this._setToQueryParams(this.componentData.queryParam);
        }
      } else {
        this.getList(optionsOfGetList);
      }
    }
  }
}
