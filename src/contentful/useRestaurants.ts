import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';

interface RestaurantStore {
    loading: boolean;
    restaurants: {
        restaurantName: string;
        address: string;
        website: string;
        priority: number
    }[];
}

export const useRestaurants = (): RestaurantStore => {
    const [restaurantsData, setRestaurantsData] = useState<RestaurantStore>({
        loading: true,
        restaurants: [],
    });

    useEffect(() => {
        const query = {
            content_type: 'restaurant',
        };

        type ExpectedOutput = {
            restaurantName: string;
            address: string;
            website: string;
            priority: number
        };

        CONTENTFUL_CLIENT.getEntries<ExpectedOutput>(query)
            .then((response) => {
                const restaurants = response.items
                    .map((item) => {
                        return {
                            restaurantName: item.fields.restaurantName,
                            address: item.fields.address,
                            website: item.fields.website,
                            priority: item.fields.priority,
                        };
                    }).sort(({ priority: a }, { priority: b }) => a - b)
                setRestaurantsData({
                    loading: false,
                    restaurants,
                });
            });
    }, []);

    return restaurantsData;
};
