/* @ngInject */
class DataService {
    constructor(storageService, $q) {
        this.storageService = storageService;
        this.$q = $q;
        this.name = 'object';
        this.model = {};
    }

    list() {
        return this.$q(resolve => setTimeout(() => resolve(this.storageService.get(this.name) || []), 500))
    }

    add(object) {
        return this.$q((resolve) => {
            this.list().then((objects) => {
                this.save([...objects, object]);
                resolve([...objects, object]);
            });
        });
    }

    save(objects) {
        this.storageService.put(this.name, objects);
    }

    update(object) {
        return this.$q((resolve) => {
            this.list().then((objects) => {
                const index = objects.findIndex(f_object => f_object.id === object.id);
                if (index === -1) throw Error(this.name + ' not found');
                objects[index] = object;
                this.save([...objects]);
                resolve([...objects]);
            });
        });
    }

    new() {
        return this.$q(resolve => this.getLastId().then(id => resolve({...this.model, id})));
    }

    remove(object, ask = true) {
        return this.$q((resolve, reject) => {
            if (ask && !confirm(`Вы дейстыительно хотите удалить ${this.name}`)) return reject();
            this.list().then(objects => {
                const index = objects.findIndex(f_object => f_object.id === object.id);
                if (index === -1) throw Error(this.name + ' not found');
                objects.splice(index, 1);
                this.save([...objects]);
                resolve([...objects]);
            })
        })
    }

    getLastId() {
        return this.$q(resolve => {
            this.list().then(objects => resolve(objects.reduce((id, object) => {
                return object.id >= id ? object.id : id;
            }, 1) + 1));
        })
    }

    find(id) {
        return this.$q(resolve => {
            this.list().then(objects => {
                const object = objects.find(f_object => f_object.id === id);
                if (!object) throw Error(this.name + ' not found');
                resolve(object);
            });
        });
    }
}

export default DataService;