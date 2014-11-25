import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  timestamp: DS.attr('date'),
  upvotes: DS.attr('number'),
  downvotes: DS.attr('number'),
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Poetic Systems',
      url: 'http://poeticsystems.com',
      timestamp: '1416574195',
      upvotes: 14,
      downvotes: 4,
    },
    {
      id: 2,
      title: 'Transcare',
      url: 'http://texastranscare.com',
      timestamp: '1395574195',
      upvotes: 12,
      downvotes: 8,
    },
    {
      id: 3,
      title: 'HealthQuest EMS',
      url: 'http://healthquestems.com',
      timestamp: '1376574195',
      upvotes: 5,
      downvotes: 9,
    },
  ]
});

export default Post;
