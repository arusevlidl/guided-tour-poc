// if calling the mixin with pageName 'mainPage', the v-tour "name" prop should be called 'mainPageTour'. That's the only manual work needed
export const TourMixin = pageName => ({
  computed: {
    steps: function() {
      return this.$store.state.tour[pageName].steps;
    }
  },
  mounted: function() {
    if (this.$store.state.tour[pageName].show) {
      this.$tours[`${pageName}Tour`].start();
    }
  },
  beforeDestroy: function() {
    this.$tours[`${pageName}Tour`].stop();
    this.$store.commit("disableTour", { page: pageName });
  }
});
