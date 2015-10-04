import * as riot from 'riot';
import * as config from './config';
import * as hnavbar from './horizontalNavbar.tag';
import * as vnavbar from './verticalNavbar.tag';
import * as home from './viewHome.tag';

riot.mount('navbar', config);
riot.mount('horizontal-navbar', config);
riot.mount('vertical-navbar', config);

const VIEW_CONTAINER = "#view-container";

function mounter(view) {
    document.querySelector(VIEW_CONTAINER).innerHTML = '<view-' + view + '></view-' + view + '>';
    riot.mount('view-' + view);
}

riot.route(function(view) {
	mounter(view);
});

export {};