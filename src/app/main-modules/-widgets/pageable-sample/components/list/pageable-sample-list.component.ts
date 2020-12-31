import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  BaseListComponentSeven2,
  ListComponentData,
  ListQueryParam
} from '../../../../../../../projects/angular-boot/common/src/lib/feature';
import {PageableSampleListModel} from './pageable-sample-list-model';
import {ActivatedRoute, Router} from '@angular/router';
import {PageableSampleService} from '../../endpoint/pageable-sample.service';
import {SearchCommonQuery} from '../../../../../../../projects/angular-boot/util/src/lib/nb-helper/helper/query';
import {takeUntilDestroyed} from '../../../../../../../projects/angular-boot/core/src/lib/service';
import {PageContainer} from '../../../../../../../projects/angular-boot/util/src/lib/nb-helper/helper/helper';
import {clone} from '../../../../../../../projects/angular-boot/util/src/lib/nb-util';

@Component({
  selector: 'app-pageable-sample-list',
  templateUrl: './pageable-sample-list.component.html',
  styleUrls: ['./pageable-sample-list.component.scss']
})
export class PageableSampleListComponent extends BaseListComponentSeven2<PageableSampleListRouteParam, PageableSampleListQueryParam,
  PageableSampleListComponentData, PageableSampleListModel>
  implements OnInit, OnDestroy {
  defaultSizeIndex = 0;
  size = 5;
  componentDataModel: PageableSampleListComponentData;

  constructor(public activatedRoute: ActivatedRoute, public router: Router,
              public pageableSampleService: PageableSampleService) {
    super(activatedRoute, router, PageableSampleListRouteParam, PageableSampleListQueryParam);
    this.componentDataModel = new PageableSampleListComponentData(PageableSampleListRouteParam, PageableSampleListQueryParam);
  }

  ngOnInit() {
    this.receiveData();
  }

  callResetPagination() {
    super.resetPagination({page: 0, size: this.size});
  }

  callInitPagination() {
    super.resetPagination({
      page: this.componentDataModel.queryParamReal.paging.page,
      size: this.componentDataModel.queryParamReal.paging.size
    });
  }

  checkAndHardChangeQueryParamReal() {
    if (!this.componentDataModel.queryParamReal.paging.page && !this.componentDataModel.queryParamReal.paging.size) {
      super.hardChangeQueryParamReal({paging: {page: 0, size: this.size}});
    }
  }

  protected _setToQueryParams(queryParam: any) {
    super.setToQueryParams(queryParam);
  }

  canDeactivate(): boolean {
    return true;
  }

  getComponentData(): PageableSampleListComponentData {
    return this.componentDataModel;
  }

  getListRemoteArg(optionsOfGetList?: any): any {
    return new SearchCommonQuery({
      paging: this.componentDataModel.queryParamReal.paging,
      sortings: this.componentDataModel.sortings,
      term: this.componentDataModel.queryParam.term
    });
  }

  getListSelf(optionsOfGetList?: any): any {
    this.pageableSampleService.search({
      paging: this.componentDataModel.queryParamReal.paging,
      sortings: this.componentDataModel.sortings,
      term: this.componentDataModel.queryParamReal.term
    }).pipe(takeUntilDestroyed(this))
      .subscribe((res: PageContainer<PageableSampleListModel>) => {
        console.table(res);
        this.componentDataModel.itemPage = res;
      });
  }

  onChangedTerm(): any {
    this.callResetPagination();
    this._setToQueryParams(this.componentDataModel.queryParamReal);
  }

  chooseSelectedItemForEdit(item: PageableSampleListModel) {
  }

  chooseSelectedItemForView(item: PageableSampleListModel): any {
  }

  deleteItem(item: PageableSampleListModel): any {
  }

  onChooseMultiMode(): any {
  }

  onChooseOneMode(): any {
  }

  onDefaultMode(): any {
  }

  onReceiveQueryParam(queryParam: PageableSampleListQueryParam): any {
    this.componentDataModel.queryParamReal = clone(queryParam);
    this.checkAndHardChangeQueryParamReal();
    this.callInitPagination();
    this.getList();
  }

  onReceiveRouteData(routeData: any): any {
  }

  onReceiveRouteParam(routeParam: PageableSampleListRouteParam): any {
  }

  sortify(event: any): any {
  }

  ngOnDestroy(): void {
  }

  onSizeChange(event) {
    this.size = event;
  }
}

export class PageableSampleListRouteParam {

}

export class PageableSampleListQueryParam extends ListQueryParam {

}

export class PageableSampleListComponentData extends ListComponentData<PageableSampleListModel,
  PageableSampleListRouteParam,
  PageableSampleListQueryParam> {
}
