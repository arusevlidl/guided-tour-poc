/*  
    When adding the mixin it should be called as a function, so that the pageName can be passed
    In order to use it properly, the "pageName" argument should be also used in the <vue-tour> as the "name" prop with the string "Tour" appended, 
    i.e. if we call the mixin with argument 'mainPage', the v-tour "name" prop should be "mainPageTour"
*/
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
