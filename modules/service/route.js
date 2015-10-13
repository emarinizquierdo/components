import {
    riot, route
}
from '../app';

debugger;

class Route {

    constructor() {
        this.URL = "/api/route";

        var self = riot.observable(this);

        this.routes = [];

        // save state
        this.on("add remove edit", function() {
            //store.put(items);
        });

    }

    get(callback) {

        $.get(this.URL, function(data, status) {

            this.routes = data;

        });
    }

}


export default Route;
