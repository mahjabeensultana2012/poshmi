const INITITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      //imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      imageUrl: 'https://i.ibb.co/H2S3kMp/images.jpg',
      id: 1,
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
    },
    {
      title: 'women',
      //imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl: 'https://i.ibb.co/BrxBL6K/women.jpg',
      size: 'large',
      id: 4,
    },
    {
      title: 'men',
      //imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      imageUrl: 'https://i.ibb.co/Dwsgb57/men.jpg',
      size: 'large',
      id: 5,
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
