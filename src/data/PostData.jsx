import Post1 from '../assets/images/post1.jpeg';
import Post2 from '../assets/images/post2.jpeg';
import Post3 from '../assets/images/post4.jpeg';
import FriendStoryImg1 from '../assets/images/img2.jpeg';
import FriendStoryImg2 from '../assets/images/img3.jpeg';
import FriendStoryImg3 from '../assets/images/img4.jpeg';

export const PostData = [
  {
    id: 1,
    name: 'John Doe',
    postImg: Post1,
    profileImg: FriendStoryImg1,
    caption: "Can't stop putting more plants in my home.",
    date: '2d',
    comments: 23,
    reaction: 180,
  },
  {
    id: 2,
    name: 'Jane Smith',
    postImg: Post2,
    profileImg: FriendStoryImg2,
    caption: 'Another beautiful day in the garden!',
    date: '1d',
    comments: 10,
    reaction: 120,
  },
  {
    id: 3,
    name: 'Mark Johnson',
    postImg: Post3,
    profileImg: FriendStoryImg3,
    caption: 'Exploring new hiking trails.',
    date: '3h',
    comments: 165,
    reaction: 50,
  }
];