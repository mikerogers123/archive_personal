export type StoreState = Readonly<{
    title: string
}>;

export const initialState = {
    title: 'Michael Rogers'
} as StoreState;