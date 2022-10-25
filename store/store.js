import create from "zustand";

export const useStore = create((set) => ({

    cart: {
        products: []
    },

    addProduct: (product) =>
        set((state) => ({
            cart: {
                products: [...state.cart.products, product]
            }
        })),
        removeProduct: (index) => set((state) => ({
            cart:state.cart.products.filter((_,i)=>i !=index)
        })),
}))
