function connect(stateReducer, dispatchReducer) {
  return component => {
    const nextComponentName = component.name;
    delete component.name;

    return {
      name: nextComponentName,

      mixins: [component],

      data() {
        return Object.assign({}, this.getDataFromStore(), {
          __internal_store_subscription__: undefined
        });
      },

      beforeMount() {
        this.__internal_store_unsubscribe__ = this.$__internal_redux_store__().subscribe(
          this.handle
        );
      },

      destroyed() {
        this.__internal_store_unsubscribe__();
      },

      methods: {
        getDataFromStore() {
          const store = this.$__internal_redux_store__();
          const state =
            typeof stateReducer === "function"
              ? stateReducer(store.getState())
              : {};
          const actions =
            typeof dispatchReducer === "function"
              ? dispatchReducer(store.dispatch)
              : {};
          return Object.assign({}, state, actions);
        },
        handle() {
          Object.assign(this.$data, this.getDataFromStore());
        }
      }
    };
  };
}

export default connect;
