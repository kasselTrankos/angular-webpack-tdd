/* @ngInject */
var AppCtrl = function($scope){
  var vm = this;
  vm.title = 'Main APP from Twitter';
  vm.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
}
module.exports = AppCtrl;
