import riot from 'riot';
import config from './config';
import hnavbar from './horizontalNavbar.tag';
import vnavbar from './verticalNavbar.tag';
import home from './viewHome.tag';
import routes from './viewRoutes.tag';


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
