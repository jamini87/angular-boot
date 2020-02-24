import {Component, Input, OnInit} from '@angular/core';
import {
  BaseListComponentSeven2,
  ListComponentData, ListQueryParam
} from '../../../../../../projects/angular-boot/common/src/lib/nb-common/feature';
import {TableColumn} from '../table-column';
import {ActivatedRoute, Router} from '@angular/router';
import {ReportBuilderService} from './report-builder.service';
import {Toolkit2} from '../../../../../../projects/angular-boot/util/src/lib/nb-util';
import {ReportFormListModel} from './report-form-list-model';
import {PageContainer} from '../../../../../../projects/angular-boot/util/src/lib/nb-helper/helper/helper';
import {ListHelper} from '../../../../../../projects/angular-boot/util/src/lib/nb-helper/helper/signals';

@Component({
  selector: 'app-query-param-test-list',
  templateUrl: './query-param-test-list.component.html',
  styleUrls: ['./query-param-test-list.component.scss']
})
export class QueryParamTestListComponent extends BaseListComponentSeven2<ReportListNsp.RouteParam, ReportListNsp.QueryParam, ReportListNsp.ComponentData, ReportFormListModel>
  implements OnInit {
  @Input() tableConfig = QueryParamTestListComponent.tableConfig;
  PAGE_SIZE = 5;

  static tableConfig = {
    columns: [
      new TableColumn({name: 'title', label: 'نام فرم', show: true}),
      new TableColumn({name: 'description', label: 'توضیحات', show: true}),
      new TableColumn({
        name: 'creationDate', label: 'تاریخ ایجاد', show: true, finalLabel: (val) => {
          return Toolkit2.Moment.isoToJSec(val);
        }
      }),
      new TableColumn({
        name: 'updateDate', label: 'تاریخ آخرین ویرایش', show: true, finalLabel: (val) => {
          return Toolkit2.Moment.isoToJSec(val);
        }
      }),
    ]
  };
  dataOfReportList: ReportListNsp.ComponentData;

  constructor(public activatedRoute: ActivatedRoute, public router: Router, private reportBuilderService: ReportBuilderService) {
    super(activatedRoute, router, ReportListNsp.RouteParam, ReportListNsp.QueryParam);
    this.dataOfReportList = new ReportListNsp.ComponentData(ReportListNsp.RouteParam, ReportListNsp.QueryParam);
  }

  ngOnInit() {
    // this.reportBuilderService.queryPublishedForm()
    this.receiveData();
  }

  protected _setToQueryParams(queryParam: ReportListNsp.QueryParam): any {
    super.setToQueryParams(queryParam);
  }

  canDeactivate(): boolean {
    return true;
  }

  chooseSelectedItemForEdit(item: ReportFormListModel): any {
  }

  chooseSelectedItemForView(item: ReportFormListModel): any {
  }

  deleteItem(item: ReportFormListModel): any {
  }

  getComponentData(): ReportListNsp.ComponentData {
    return this.dataOfReportList;
  }

  getListRemoteArg(optionsOfGetList?: any): any {
    return new ListHelper(
      {
        paging: this.dataOfReportList.queryParamReal.paging,
        sortings: this.dataOfReportList.sortings,
        term: this.dataOfReportList.queryParam.term
      }
    );
  }

  getListSelf(optionsOfGetList?: any): any {
    this.reportBuilderService.queryPublishedForm(
      {
        paging: this.dataOfReportList.queryParamReal.paging,
        sortings: this.dataOfReportList.sortings,
        term: this.dataOfReportList.queryParamReal.term
      }).subscribe((res: PageContainer<ReportFormListModel>) => {
      // return
      this.dataOfReportList.itemPage = res;
    });
  }

  onChangedTerm(): any {
  }

  onChooseMultiMode(): any {
  }

  onChooseOneMode(): any {
  }

  onDefaultMode(): any {
  }

  onReceiveQueryParam(queryParam: ReportListNsp.QueryParam): any {
    setTimeout(() => {
      debugger;
      this.dataOfReportList.queryParamReal = JSON.parse(JSON.stringify(queryParam));
      this.getList();
    }, 2000)

  }

  onReceiveRouteData(routeData: any): any {
  }

  onReceiveRouteParam(routeParam: ReportListNsp.RouteParam): any {
  }

  sortify(event: any): any {
  }

  search() {
    debugger;
    this.dataOfReportList.queryParam.paging.page = 0;
    this.dataOfReportList.queryParam.paging.size = this.PAGE_SIZE;
    // this.dataOfReportList.queryParam.term === '' ? this.dataOfReportList.queryParam.term = null : noop();
    console.log('************', this.dataOfReportList.queryParam);
    this._setToQueryParams(this.dataOfReportList.queryParam);
  }

  prepareReportView(id: string) {
    this.router.navigate(['/panel/report-center/ssrs-report-view'], {
      queryParams: {reportFormId: id},
      relativeTo: this.activatedRoute
    });
  }
}

export namespace ReportListNsp {
  export class RouteParam {

  }

  export class QueryParam extends ListQueryParam {

  }

  export class ComponentData extends ListComponentData<ReportFormListModel, RouteParam, QueryParam> {
  }
}
