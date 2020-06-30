import meals from './meals.js';

class DataSource {
    static searchMeal(keyword) {
        // return new Promise((resolve, reject) => {
        //     const filteredMeals = meals.filter(meal => meal.name.toUpperCase().includes(keyword.toUpperCase()));
        //     if (filteredMeals.length) {
        //         resolve(filteredMeals);
        //     } else {
        //         reject(`${keyword} is not found`);
        //     }
        // });
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }

}

export default DataSource;