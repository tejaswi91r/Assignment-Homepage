const ratingData = [
  { restaurant: 'KFC', rating: 5 },
  { restaurant: 'Burger King', rating: 4 },
  { restaurant: 'KFC', rating: 3 },
  { restaurant: 'Domino', rating: 2 },
  { restaurant: 'Subway', rating: 3 },
  { restaurant: 'Domino', rating: 1 },
  { restaurant: 'Subway', rating: 4 },
  { restaurant: 'Pizza Hut', rating: 5 }
];


const restaurantRatings = {};


ratingData.forEach(({ restaurant, rating }) => {
  if (!restaurantRatings[restaurant]) {
    restaurantRatings[restaurant] = { totalRating: 0, totalRatingsCount: 0 };
  }
  restaurantRatings[restaurant].totalRating += rating;
  restaurantRatings[restaurant].totalRatingsCount++;
});


const averageRatings = Object.keys(restaurantRatings).map(restaurant => {
  const { totalRating, totalRatingsCount } = restaurantRatings[restaurant];
  return { restaurant, averageRating: totalRating / totalRatingsCount };
});

console.log("Average Rating for Each Restaurant:", averageRatings);

// Filter restaurants with average rating greater than or equal to 4
const highlyRatedRestaurants = averageRatings.filter(restaurant => restaurant.averageRating >= 4);

console.log("Restaurants with Average Rating >= 4:", highlyRatedRestaurants);
