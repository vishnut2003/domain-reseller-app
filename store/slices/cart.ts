import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { NameComSingleDomainSearchResult } from "@/app/api/domains/search-available-domain/route";

export interface CartItem {
    domainName: string;
    sld: string;
    tld: string;
    premium: boolean;
    purchasePrice: number;
    renewalPrice: number;
    years: number;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addDomainToCart: (
            state,
            action: PayloadAction<{ domain: NameComSingleDomainSearchResult; years?: number }>,
        ) => {
            const { domain, years = 1 } = action.payload;
            if (state.items.some((item) => item.domainName === domain.domainName)) return;
            state.items.push({
                domainName: domain.domainName,
                sld: domain.sld,
                tld: domain.tld,
                premium: domain.premium,
                purchasePrice: domain.purchasePrice,
                renewalPrice: domain.renewalPrice,
                years,
            });
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.domainName !== action.payload);
        },
        updateItemYears: (
            state,
            action: PayloadAction<{ domainName: string; years: number }>,
        ) => {
            const item = state.items.find((i) => i.domainName === action.payload.domainName);
            if (item && action.payload.years >= 1) item.years = action.payload.years;
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addDomainToCart, removeFromCart, updateItemYears, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
