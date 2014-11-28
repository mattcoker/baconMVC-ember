import Ember from 'ember';

var PostController = Ember.ObjectController.extend({
  addedVote: 0,

  upVoted: function() {
    return (this.get('addedVote') === 1);
  }.property('addedVote'),

  downVoted: function() {
    return (this.get('addedVote') === -1);
  }.property('addedVote'),

  netVotes: function() {
    return this.get('model.upvotes') - this.get('model.downvotes') + this.get('addedVote');
  }.property('upvotes', 'downvotes', 'addedVote'),

  actions: {
    addUpVote: function() {
      if(this.get('addedVote') !== 1) {
        this.set('addedVote', 1);
      } else {
        this.set('addedVote', 0);
      }
    },
    addDownVote: function() {
      if(this.get('addedVote') !== -1) {
        this.set('addedVote', -1);
      } else {
        this.set('addedVote', 0);
      }
    },
  }
});

export default PostController;
