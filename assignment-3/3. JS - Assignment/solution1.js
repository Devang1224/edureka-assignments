class restaurantManager {
   
    restaurantList=[
        {
            name: 'Starbucks',
            address: 'Canaught place',
            city: 'Delhi'
        },
        {
            name: 'Xerodegrees',
            address: 'Indrapuram',
            city: 'UP'
        },
        {
            name: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            name: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    printAllRestaurantNames(){
        for(let i=0;i<this.restaurantList.length;i++)
         console.log(this.restaurantList[i].name)
    }
    filterRestaurantByCity(cityName)
    {
        const filteredRestaurant=this.restaurantList.filter((restaurant)=>restaurant.city==cityName);
        for(let x of filteredRestaurant)
         console.log(x.name);
        
        
    }
    

}

const restaurantObj = new restaurantManager();
restaurantObj.printAllRestaurantNames(); 
restaurantObj.filterRestaurantByCity('Delhi');