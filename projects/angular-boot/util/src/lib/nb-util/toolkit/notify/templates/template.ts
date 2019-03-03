/**
 * Created by Jafar Amini in March 2018.
 */
export default {
'template1':
'<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
// '<button type="button" aria-hidden="true" class="close pull-left" data-notify="dismiss">×</button>' +
'<i data-notify="icon"></i> ' +
'<span data-notify="title"style="font-weight: bold;">{1}</span> ' +
'<br/>' +
'<span data-notify="message">{2}</span>' +
'<div class="progress" data-notify="progressbar">' +
'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0"' +
' aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
'</div>' +
'<a href="{3}" target="{4}" data-notify="url"></a>' +
'</div>',
  'template1_without_title':
  '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
// '<button type="button" aria-hidden="true" class="close pull-left" data-notify="dismiss">×</button>' +
  '<i data-notify="icon"></i> ' +
  '<span data-notify="message">{2}</span>' +
  '<div class="progress" data-notify="progressbar">' +
  '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0"' +
  ' aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
  '</div>' +
  '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>',
  'template2':
  '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
  '<i data-notify="icon"  style="position: absolute; right: -30px; font-size: x-large;"></i>' +
  '<span data-notify="title"style="font-weight: bold;">{1}</span>' +
  '<br/>' +
  '<span data-notify="message"><div style="text-align: justify; text-justify: inter-word;">{2}</div></span>' +
  '<div class="progress" data-notify="progressbar">' +
    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" '+
    'aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>'+
  '</div>' +
  '<a href="{3}" target="{4}" data-notify="url"></a>' +
'</div>',


  'template2_without_title':
  '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
  '<div>' +
    '<i data-notify="icon" style="position: absolute; right: -30px; font-size: x-large;"></i>' +
  '</div>' +
  '<div>' +
    '<span data-notify="message">{2}</span>' +
  '</div>' +
  '<div class="progress" data-notify="progressbar">' +
  '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" '+
  'aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>'+
  '</div>' +
  '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>'
};
