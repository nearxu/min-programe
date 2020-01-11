Component({
  methods: {
    tapname() {
      this.triggerEvent('triggerParent', { value: 'hello parent' });
    },
  },
});
