import bruschetta from "@/assets/bruschetta.jpg";
import caesarSalad from "@/assets/caesar-salad.jpg";
import salmon from "@/assets/salmon.jpg";
import steak from "@/assets/steak.jpg";
import carbonara from "@/assets/carbonara.jpg";
import tiramisu from "@/assets/tiramisu.jpg";
import lavaCake from "@/assets/lava-cake.jpg";
import cocktail from "@/assets/cocktail.jpg";

export type Category = "All" | "Starters" | "Mains" | "Desserts" | "Drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  tags?: string[];
}

export const categories: Category[] = ["All", "Starters", "Mains", "Desserts", "Drinks"];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Tomato Bruschetta",
    description: "Toasted sourdough topped with vine-ripened tomatoes, fresh basil, and aged balsamic glaze",
    price: 12,
    image: bruschetta,
    category: "Starters",
    tags: ["Vegetarian"],
  },
  {
    id: "2",
    name: "Caesar Salad",
    description: "Crisp romaine hearts, shaved Parmigiano-Reggiano, house-made croutons, and classic Caesar dressing",
    price: 14,
    image: caesarSalad,
    category: "Starters",
  },
  {
    id: "3",
    name: "Grilled Atlantic Salmon",
    description: "Pan-seared salmon fillet with roasted seasonal vegetables and lemon-dill beurre blanc",
    price: 28,
    image: salmon,
    category: "Mains",
  },
  {
    id: "4",
    name: "Ribeye Steak",
    description: "10oz prime ribeye, chargrilled to your preference, served with rosemary roasted potatoes",
    price: 36,
    image: steak,
    category: "Mains",
    tags: ["Chef's Pick"],
  },
  {
    id: "5",
    name: "Spaghetti Carbonara",
    description: "Al dente spaghetti with pancetta, egg yolk, Pecorino Romano, and cracked black pepper",
    price: 22,
    image: carbonara,
    category: "Mains",
  },
  {
    id: "6",
    name: "Classic Tiramisu",
    description: "Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa powder",
    price: 13,
    image: tiramisu,
    category: "Desserts",
  },
  {
    id: "7",
    name: "Chocolate Lava Cake",
    description: "Warm dark chocolate fondant with a molten center, served with vanilla bean gelato",
    price: 14,
    image: lavaCake,
    category: "Desserts",
    tags: ["Popular"],
  },
  {
    id: "8",
    name: "Old Fashioned",
    description: "Bourbon, Angostura bitters, raw cane sugar, and a twist of orange peel",
    price: 16,
    image: cocktail,
    category: "Drinks",
  },
];
