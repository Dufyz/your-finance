import { Card } from "@/types/Card";
import { create } from "zustand";

type CardsStore = {
    cards: Card[];

    selectedCard: Card | null;
    setSelectedCard: (card: Card) => void;

    addCard: (card: Card) => void;
    removeCard: (card: Card) => void;
    updateCard: (card: Card) => void;

    getCard: (id: string) => Card | null;
}

const createCardsStore = (set: any, get: () => CardsStore) => ({
    cards: [],

    selectedCard: null,
    setSelectedCard: (card: Card) => set({
        selectedCard: card
    }),

    addCard: (card: Card) => {
        const {cards} = get();

        set({
            cards: [...cards, card]
        })
    },

    removeCard: (card: Card) => {
        const {cards} = get();

        set({
            cards: cards.filter(c => c.id !== card.id)
        })
    },

    updateCard: (card: Card) => {
        const {cards} = get();

        set({
            cards: cards.map(c => c.id === card.id ? card : c)
        })
    },
});

export const useCardsStore = create((set, get) => ({
    ...createCardsStore
}))
