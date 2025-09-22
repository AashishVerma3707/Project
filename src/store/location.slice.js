const locationSlice = (set) => ({
  location: {},
  setLocation: (value) => set(() => ({ location: value })),
});

export default locationSlice;
