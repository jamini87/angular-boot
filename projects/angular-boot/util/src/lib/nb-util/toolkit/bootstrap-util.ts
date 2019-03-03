/**
 * Created by Jafar Amini in March 2018.
 */
declare var $: any;
export class BootstrapUtil {
  public static goToCrouselSlide(carouselSelector:string, slideNumber: number){
    $(carouselSelector).carousel(slideNumber);
  }
}
