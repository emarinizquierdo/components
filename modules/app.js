import riot from 'riot';
import router from './router';
import riotLogo from './riotLogo.tag';
import moreVertical from './moreVertical.tag';
import searchBox from './searchBox.tag';
import footer from './footer.tag';
import map from './riotMap.tag';
import Route from './service/route';

riot.mount('riot-logo');
riot.mount('riot-footer');
riot.mount('more-vertical');
riot.mount('search-box');


/* Create Models */
var route = new Route();
debugger;
export {
    riot,
    route
}
