import { NoteData } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialDraft: NoteData = {
  title: "",
  content: "",
  tag: "Todo",
};

interface CreateNote {
  draft: NoteData;
  setDraft: (note: NoteData) => void;
  clearDraft: () => void;
}

export const useCreateNote = create<CreateNote>()(
  persist(
    (set) => {
      return {
        draft: initialDraft,
        setDraft: (note) => {
          set({ draft: note });
        },
        clearDraft: () => {
          set({ draft: initialDraft });
        },
      };
    },
    {
      name: "note",
      partialize: (store) => ({ draft: store.draft }),
    },
  ),
);
