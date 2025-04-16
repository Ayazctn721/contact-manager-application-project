export const initialState = () => ({
  // demo for todos - replace with your needed state
  todos: [],
  user: {
    isAuthenticated: true,
    user_id: 22,
  },
  contacts: [    {
    base64_image: "",
    city: "Anytown",
    country: "USA",
    email: "john.doe@example.com",
    full_name: "John Doe",
    id: 11,
    is_favorite: false,
    phone_number: "123-456-7890"
  },
  {
    base64_image: "broken",
    city: "Anytown",
    country: "USA",
    email: "john.doe@example.com",
    full_name: "John Doe",
    id: 12,
    is_favorite: false,
    phone_number: "123-456-7890"
  }],
});