angular.module('socialAppParent').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/apps/socialApp/social-timeline.html',
    "<h2 ng-if=\"!socialShowControls\">Around me</h2><div ng-if=\"!socialShowControls\"><ul class=\"nav nav-pills\"><li class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive('all')}\"><a class=\"text-gray\" ng-click=\"timelineSwitchService('all')\" href=\"#\"><i class=\"fa fa-th\"></i></a></li><li ng-repeat=\"(service, title) in services\" ng-show=\"showServiceTab(service)\" class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive(service)}\"><a class=\"text-gray\" ng-click=\"timelineSwitchService(service)\" href=\"#\"><i class=\"fa fa-{{service}}\"></i></a></li></ul></div><div class=\"now-feed clearfix\" ng-class=\"oddEvenSwitch ? 'item-left' : 'item-right'\"><div ng-repeat=\"(key, item) in social track by item.id\" class=\"feed-type-{{item.service}}\" data-date=\"{{getPublishedDate(item.date)}}\"><a class=\"feed-icon text-gray\" ng-href=\"{{getPostUrl(item)}}\" target=\"_blank\"><i class=\"fa {{services[item.service].icon}}\"></i></a><div class=\"card\"><a ng-if=\"item.image\" href=\"{{item.url}}\" target=\"_blank\"><img class=\"card-image\" ng-src=\"{{item.image}}\"></a><div class=\"card-block\"><h6 ng-if=\"item.title\" class=\"card-title\" ng-bind-html=\"toSafe(item.title)\"></h6><div class=\"\" ng-bind-html=\"toSafe(item.text, item.service)\"></div><div ng-if=\"item.date\" class=\"social-date text-gray\" date=\"{{item.date}}\">{{item.date|date}}</div></div></div></div></div>"
  );


  $templateCache.put('views/apps/socialApp/social.html',
    "<h2>Connect</h2><div class=\"row\"><div class=\"col-xs-8\"><ul class=\"nav nav-pills\"><li class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive('all')}\"><a class=\"text-gray\" ng-click=\"switchService('all')\" href=\"#\"><i class=\"fa fa-th\"></i></a></li><li ng-repeat=\"(service, title) in services\" ng-show=\"showServiceTab(service)\" class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive(service)}\"><a class=\"text-gray\" ng-click=\"switchService(service, $event)\" href=\"#\"><i class=\"fa fa-{{service}}\"></i></a></li></ul></div><div class=\"col-xs-4 text-right\"><a class=\"btn btn-xs btn-default\" ng-click=\"recent()\">Recent</a> <a class=\"btn btn-xs btn-default\" ng-click=\"shuffle()\">Shuffle</a></div></div><ul isotope-container=\"isotope-container\" class=\"social-wall\"><li ng-repeat=\"item in social track by item.id\" isotope-item=\"isotope-item\" class=\"social-{{item.service}}\" data-date=\"{{getPublishedDate(item.date)}}\"><div class=\"card\"><a ng-if=\"item.image\" href=\"{{item.url}}\" target=\"_blank\"><img class=\"card-img-top\" ng-src=\"{{item.image}}\"></a><div class=\"card-block\"><h4 ng-if=\"item.title\" class=\"card-title\">{{item.title}}</h4><p class=\"card-text\" ng-bind-html=\"toSafe(item.text, item.service)\"></p><a class=\"pull-right text-gray\" ng-href=\"{{getPostUrl(item)}}\" target=\"_blank\"><i class=\"fa fa-{{item.service}}\"></i></a><div ng-if=\"item.date\" class=\"social-date text-gray\" date=\"{{item.date}}\">{{item.date|date}}</div></div></div></li></ul>"
  );

}]);
