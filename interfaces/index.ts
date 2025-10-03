export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export interface ButtonProps {
    label: string;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export interface PropertyProps {
    name:     string;
    address:  Address;
    rating:   number;
    category: string[];
    price:    number;
    offers:   Offers;
    image:    string;
    discount: string;
}

export interface Address {
    state:   string;
    city:    string;
    country: string;
}

export interface Offers {
    bed:       string;
    shower:    string;
    occupants: string;
}



