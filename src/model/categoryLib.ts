import { Category } from "@/constants/category";

export type CategoryLib<T> = Partial<Record<Category, T>>;
