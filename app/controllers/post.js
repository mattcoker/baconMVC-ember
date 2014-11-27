import Ember from 'ember';

var PostController = Ember.ObjectController.extend({
  netVotes: function() {
    return this.get('model.upvotes') - this.get('model.downvotes');
  }.property()
});

export default PostController;
