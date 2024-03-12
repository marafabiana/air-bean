import {create} from 'zustand';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (id: string, title: string, price: number) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  getTotalCost: () => number;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (id, title, price) => {
    set((state) => {
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        // Item already exists in the cart. Increase the quantity.
        const newItems = state.items.map((item, index) =>
        //Conditional ternary operator ?: 
          index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { items: newItems };
      } else {
        // New item in cart. Add with initial quantity of 1.
        const newItem = { id, title, price, quantity: 1 };
        return { items: [...state.items, newItem] };
      }
    });
  },

  increment: (id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decrement: (id) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        )
        .filter((item) => item.quantity > 0), // Remove item if quantity is 0.
    }));
  },

  getTotalCost: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  clearCart: () => {
    set(() => ({
      items: []
    }))
  }
}));