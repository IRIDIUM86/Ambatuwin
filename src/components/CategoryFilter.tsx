import { categories, type Category } from "@/data/menuData";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  active: Category;
  onChange: (cat: Category) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium font-body transition-all duration-200",
            active === cat
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
