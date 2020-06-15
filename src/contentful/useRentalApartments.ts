import { useEffect, useState } from 'react';
import { CONTENTFUL_CLIENT } from './index';

interface RentalApartmentsStore {
    loading: boolean;
    rentalApartments: {
        name: string;
        website: string;
    }[];
}

export const useRentalApartments = (): RentalApartmentsStore => {
    const [apartmentData, setApartmentData] = useState<RentalApartmentsStore>({
        loading: true,
        rentalApartments: [],
    });

    useEffect(() => {
        const query = {
            content_type: 'rentalAppartments',
        };

        type ExpectedOutput = {
            name: string;
            website: string;
        };

        CONTENTFUL_CLIENT.getEntries<ExpectedOutput>(query)
            .then((response) => {
                const apartments = response.items
                    .map((item) => {
                        console.log({ item })
                        return {
                            name: item.fields.name,
                            website: item.fields.website
                        };
                    })
                console.log({ apartments })
                setApartmentData({
                    loading: false,
                    rentalApartments: apartments,
                });
            });
    }, []);

    return apartmentData;
};
