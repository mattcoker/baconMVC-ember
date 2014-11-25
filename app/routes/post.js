import Ember from 'ember';

var PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  }
});


export default PostRoute;
