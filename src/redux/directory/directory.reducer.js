const INITITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/H2S3kMp/images.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      //imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      imageUrl: 'https://i.ibb.co/5KDQ9Lc/jackets.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      //imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      imageUrl: 'https://i.ibb.co/7KX3dzn/sneakers.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'women',
      imageUrl: 'https://i.ibb.co/BrxBL6K/women.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/women',
    },
    {
      title: 'men',
      imageUrl: 'https://i.ibb.co/Dwsgb57/men.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/men',
    },
  ],
};

const directoryReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
