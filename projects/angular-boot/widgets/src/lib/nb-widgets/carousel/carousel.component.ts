import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Toolkit2} from '@angular-boot/util';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'nbw-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  show: boolean;
  // @Input() replicationElementId: string;
  replicationElementId: string;
  @Input() title: string;
  @Input() onLeaveHistoryBack: boolean;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  myId: string;

  constructor(private _ActivatedRoute: ActivatedRoute) {
    // this._ActivatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.replicationElementId = params.get('replic_id');
    // });
    this.replicationElementId = this._ActivatedRoute.snapshot.paramMap.get('replic_id');
  }

  ngOnInit() {
    this.show = true;
    this.myId = 'carousel_' + Toolkit2.Common.create().uuidv4();
  }

  goBack() {
    this.onBack();
    if(this.onLeaveHistoryBack){
      window.history.back();
    }
  }
  onBack() {
    this.show = false;
    // document.getElementById(this.replicationElementId).style.display = 'block';
    let elList = document.getElementsByClassName(this.replicationElementId);
    for(let i= 0; i< elList.length; i++) {
      (<any>elList.item(i)).style.display = 'block';
    }
    this.onClose.emit(true);
  }

  ngAfterViewInit(): void {
    // document.getElementById(this.replicationElementId).style.display = 'none';
    let elList = document.getElementsByClassName(this.replicationElementId);
    Array.prototype.forEach.call(elList, (slide, index) => {
      (<any>elList.item(index)).style.display = 'none';
    });

    // for(let i= 0; i< elList.length; i++) {
    //   elList.item(i).style.display = 'none';
    // }
  }

  ngOnDestroy(): void {
    this.onBack();
  }

}
