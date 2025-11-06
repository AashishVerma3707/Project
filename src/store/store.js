import { create } from "zustand";
import { persist } from "zustand/middleware";
import locationSlice from "./location.slice";
import userSlice from "./user.slice";

const zustandStore = create(
  persist(
    (set) => ({
      ...locationSlice(set),
      ...userSlice(set),
    }),
    {
      name: "weather-app-store",
      // Persisting no data.
      partialize: () => ({}),
    }
  )
);

export default zustandStore;
