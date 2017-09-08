function VueRedux(store) {
  return VueInstance =>
    VueInstance.mixin({
      methods: {
        $__internal_redux_store__() {
          return store;
        }
      }
    });
}

export default VueRedux;
