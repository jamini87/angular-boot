/**
 * @author Jafar Amini in March 2018.
 */
import {Subject} from 'rxjs';
import swal from 'sweetalert2';
// declare var swal: any;
import {isNullOrUndefined} from 'util';
import {Config} from './config';
import {FakeServiceBase} from './fake-service-base.service';
import {Keyword, ResponseContent} from '../response';

declare const $: any;


// @Injectable()
export class FakeServiceBase2 extends FakeServiceBase {
    constructor() {
      super();
      this.url = Config.getFakeUrl();
    }

    getService(_url): any {
        const ret = new Subject();
        super.getService(_url).subscribe((res: ResponseContent<any>) => {
            // console.log(_url + '------->' , res )
// ;
            if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
              ret.next(res);
            } else if (res.flag) {
                ret.next(res.data);
            } else if (!res.flag) {
                // console.log('operation failed!');
                const from = 'top';
                const align = 'center';
                const type_ = 'danger';
                const msg = '';
                // console.log('عملیات انجام نشد');
                for (const state of res.states) {
                    if (state.message !== '') {
                        // Notifyme.showNotify(from, align, type_, state.message);
                        // alert(state.message);
                        swal({
                            type: 'warning',
                            title: state.message ,
                            confirmButtonText: 'تایید!'

                        });
                    } else {
                        // Notifyme.showNotify(from, align, type_, Keyword[state.keyword]);
                        // alert(Keyword[state.keyword]);
                        swal({
                            type: 'warning',
                            title: Keyword[state.keyword] ,
                            confirmButtonText: 'تایید!'

                        });
                    }
                }
            }
        }, error => {
            // if (error.status === 500){
            //   alert(500);
            //   alert(error._body)
            // }
            if (error.status === 403) {
                // alert("درخواست غیرمجاز");
                swal({
                    type: 'warning',
                    title: 'درخواست غیرمجاز',
                    confirmButtonText: 'تایید!'

                });
            } else {
                alert('error.status ' + error.status);
            // console.log('error---> ' + error);
            // console.log('error._body ' + error._body)
            }
        });
        return ret.asObservable();
    }

    getService_f(_url): any {
        const ret = new Subject();
        super.getService(_url).subscribe((res: ResponseContent<any>) => {
            // console.log(_url + '------->' , res );
          if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
            ret.next(res);
          } else if (res.flag) {
                ret.next(res.data);
          } else if (!res.flag) {
              ret.error(res);
          }
        }, error => {
            // if (error.status === 500){
            //   alert(500);
            //   alert(error._body)
            // }
            if (error.status === 403) {
                swal({
                    type: 'warning',
                    title: 'درخواست غیرمجاز',
                    confirmButtonText: 'تایید!'

                });
            } else {
                alert('error.status ' + error.status);
            // console.log('error---> ' + error);
            // console.log('error._body ' + error._body)
            }
        });
        return ret.asObservable();
    }

    private updateFakeDatabase(_objectName: string, objectData: any) {
      localStorage.setItem(_objectName, JSON.stringify(objectData));
    }

    postService(value: any, _url): any {
      // console.log('value: ', value);
        const ret = new Subject();
        super.postService(value, _url).subscribe((res: ResponseContent<any>) => {
          super.getService('').subscribe(
            (res2: any[]) => {
              // console.log('ressssssssss: ', res2);
              this.updateFakeDatabase(this._objectName, res2);
            }
          );
            // console.log('response =======>', res);
          if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
            ret.next(res);
          } else if (res.flag) {
                ret.next(res.data);
          } else if (!res.flag) {
              // console.log('operation failed!');
                const from = 'top';
                const align = 'center';
                const type_ = 'danger';
                const msg = '';
                for (const state of res.states) {
                    if (state.message !== '') {
                        // Notifyme.showNotify(from, align, type_, state.message);
                        // alert(state.message);
                        swal({
                            showCloseButton: true,
                            confirmButtonColor: '#04383c',
                            background: '#e4e4e4',
                            type: 'error',
                            title: 'خطا!',
                            html:
                            '<p>' + state.message + '</p>'
                            ,
                            confirmButtonText: 'تایید'

                        });
                    } else {
                        // Notifyme.showNotify(from, align, type_, Keyword[state.keyword]);
                        // alert(Keyword[state.keyword]);


                        swal({
                            showCloseButton: true,
                            confirmButtonColor: '#04383c',
                            background: '#e4e4e4',
                            type: 'error',
                            title: 'خطا!',
                            html:
                            '<p>' + Keyword[state.keyword] + '</p>'
                            ,
                            confirmButtonText: 'تایید'

                        });

                    }
                }
            }
        }, error => {
            // if (error.status === 500){
            //   alert(500);
            //   alert(error._body)
            // }
            if (error.status === 403){
                // alert("درخواست غیرمجاز");
                swal({
                    type: 'warning',
                    title: 'درخواست غیرمجاز',
                    confirmButtonText: 'تایید!'

                });
            } else {
                alert('error.status ' + error.status);
            // console.log('error---> ' + error);
            // console.log('error._body ' + error._body)
            }
        });
        return ret.asObservable();
    }

    postService_f(value: any, _url): any {
        const ret = new Subject();
        super.postService(value, _url).subscribe((res: ResponseContent<any>) => {
            // console.log('response =======>', res);
          if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
            ret.next(res);
          } else if (res.flag) {
                ret.next(res.data);
          } else if (!res.flag) {
              ret.error(res);
          }
        }, error => {
            // if (error.status === 500){
            //   alert(500);
            //   alert(error._body)
            // }
            if (error.status === 403){
                swal({
                    type: 'warning',
                    title: 'درخواست غیرمجاز',
                    confirmButtonText: 'تایید!'

                });
            } else {
                alert('error.status ' + error.status);
            // console.log('error---> ' + error);
            // console.log('error._body ' + error._body)
            }
        });
        return ret.asObservable();
    }


    putService(value: any, _url): any {
        const ret = new Subject();
        super.putService(value, _url).subscribe((res: ResponseContent<any>) => {
            // console.log('response =======>', res);
          if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
            ret.next(res);
          } else if (res.flag) {
                ret.next(res.data);
          } else if (!res.flag){
                // console.log('operation failed!');
                const from = 'top';
                const align = 'center';
                const type_ = 'danger';
                const msg = '';

                for (const state of res.states) {
                    if (state.message !== '') {
                        // Notifyme.showNotify(from, align, type_, state.message);
                        // alert(state.message);
                        swal({
                            type: 'warning',
                            title: state.message,
                            confirmButtonText: 'تایید!'

                        });
                    } else {
                        // Notifyme.showNotify(from, align, type_, Keyword[state.keyword]);
                        // alert(Keyword[state.keyword]);
                        swal({
                            type: 'warning',
                            title: Keyword[state.keyword],
                            confirmButtonText: 'تایید!'

                        });
                    }
                }
            }
        }, error => {
            // if (error.status === 500){
            //   alert(500);
            //   alert(error._body)
            // }
            if (error.status === 403) {
                // alert("درخواست غیرمجاز");
                swal({
                    type: 'warning',
                    title: 'درخواست غیرمجاز',
                    confirmButtonText: 'تایید!'

                });
            } else {
                alert('error.status ' + error.status);
            // console.log('error---> ' + error);
            // console.log('error._body ' + error._body)
            }
        });
        return ret.asObservable();
    }


    putService_f(value: any, _url): any {
        const ret = new Subject();
        super.putService(value, _url).subscribe((res: ResponseContent<any>) => {
            // console.log('response =======>', res);
          if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
            ret.next(res);
          } else if (res.flag) {
                ret.next(res.data);
          } else if (!res.flag) {
              ret.error(res);
          }
        }, error => {
            // if (error.status === 500){
            //   alert(500);
            //   alert(error._body)
            // }
            if(error.status === 403){
                // alert("درخواست غیرمجاز");
                swal({
                    type: 'warning',
                    title: 'درخواست غیرمجاز',
                    confirmButtonText: 'تایید!'

                });
            } else {
                alert('error.status ' + error.status);
            }
            // console.log('error---> ' + error);
            // console.log('error._body ' + error._body)
        });
        return ret.asObservable();
    }

    deleteService(parentId: string): any {
        const ret = new Subject();
        super.deleteService(parentId).subscribe((res: ResponseContent<any>) => {
          // console.log('res---------------...>>', res);
          super.getService('').subscribe(
            (res2: any[]) => {
              // console.log('ressssssssss: ', res2);
              this.updateFakeDatabase(this._objectName, res2);


              if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
                ret.next(res);
              } else if (res.flag) {
                ret.next(res.data);
              } else if (!res.flag){
                // console.log('operation failed!');
                const from = 'top';
                const align = 'center';
                const type_ = 'danger';
                const msg = '';

                for (const state of res.states) {
                  if (state.message !== '') {
                    // Notifyme.showNotify(from, align, type_, state.message);
                    // alert(state.message);
                    swal({
                      type: 'warning',
                      title: state.message,
                      confirmButtonText: 'تایید!'

                    });
                  } else {
                    // Notifyme.showNotify(from, align, type_, Keyword[state.keyword]);
                    // alert(Keyword[state.keyword]);
                    swal({
                      type: 'warning',
                      title: Keyword[state.keyword],
                      confirmButtonText: 'تایید!'

                    });
                  }
                }
              }




            }
          );

        }, error => {
            // if (error.status === 500){
            //   alert(500);
            //   alert(error._body)
            // }
            if (error.status === 403) {
                // alert("درخواست غیرمجاز");
                swal({
                    type: 'warning',
                    title: 'درخواست غیرمجاز',
                    confirmButtonText: 'تایید!'

                });
        } else {
              alert('error.status ' + error.status);
            }
            // console.log('error---> ' + error);
            // console.log('error._body ' + error._body)
        });
        return ret.asObservable();
    }

    deleteService_f(parentId: string): any {
        const ret = new Subject();
        super.deleteService(parentId).subscribe((res: ResponseContent<any>) => {
          if (isNullOrUndefined(res) || isNullOrUndefined(res.flag)) {
            ret.next(res);
          } else if (res.flag) {
                ret.next(res.data);
          } else if (!res.flag){
              ret.error(res);
          }
        }, error => {
            // if (error.status === 500){
            //   alert(500);
            //   alert(error._body)
            // }
            if (error.status === 403) {
                // alert("درخواست غیرمجاز");
                swal({
                    type: 'warning',
                    title: 'درخواست غیرمجاز',
                    confirmButtonText: 'تایید!'

                });
            } else{
                alert('error.status ' + error.status);
            }
            // console.log('error---> ' + error);
            // console.log('error._body ' + error._body)
        });
        return ret.asObservable();
    }
}
