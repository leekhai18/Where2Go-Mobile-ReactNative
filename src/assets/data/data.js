import moment from 'moment';

const data = [
  {
    name: 'Lorem Ipsum',
    rate: '4.5',
    address: 'Lorem ipsum dolor sit amet',
    type: 'Consectetur',
    date: moment(),
    likes: 989,
    comments: 13,
    picture: 'https://i.imgur.com/lceHsT6l.jpg',
    author: 'leekhai',
    items: [
      {
        id: '1',
        describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt et turpis rhoncus fringilla. Praesent sed placerat elit. Nulla libero ipsum, condimentum id finibus in, ultrices vitae enim. Sed eget ultrices augue. In varius ipsum nec viverra tincidunt. Donec congue vehicula turpis, et lacinia quam feugiat sit amet. Curabitur interdum nisl non congue tincidunt. Vivamus venenatis accumsan nisl at aliquam. Pellentesque eget eros eget magna luctus porttitor ac ac lectus.',
        comments: [
          {
            avatar: 'leekim',
            content: 'Vestibulum hendrerit ante non libero facilisis, vel viverra orci porta',
            time: '10h'
          },
          {
            avatar: 'khanhu',
            content: 'Phasellus rutrum lorem sit amet odio fermentum vestibulum',
            time: '12h'
          },
          {
            avatar: 'kieuanh',
            content: 'Vestibulum hendrerit ante non libero facilisis, vel viverra orci port',
            time: '14h'
          },
          {
            avatar: 'leminh',
            content: 'Phasellus rutrum lorem sit amet odio fermentum vestibulum',
            time: '20h'
          }
        ]
      },
    ],
  },
];

export default data;
