

class EntityInstance {

    static newInstance( entityName ) {
         const { default: ent } = require(`./${entityName}.entity`);
         return ent;
    }
 
}

export default EntityInstance;

