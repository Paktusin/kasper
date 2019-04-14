const propsFilter = angular.module('propsFilter', []).filter('propsFilter', function () {
    return function (items, props) {
        let out = [];
        if (angular.isArray(items)) {
            let keys = Object.keys(props);
            items.forEach(function (item) {
                let itemMatches = false;
                for (let i = 0; i < keys.length; i++) {
                    let prop = keys[i];
                    let text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }
                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            out = items;
        }
        return out;
    };
});

export default propsFilter;