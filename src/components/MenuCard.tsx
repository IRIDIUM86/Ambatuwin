import type { MenuItem } from "@/data/menuData";
import { Plus, Minus } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

const MenuCard = ({ item, quantity, onAdd, onRemove }: MenuCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {item.tags && (
          <div className="absolute top-3 left-3 flex gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
            {item.name}
          </h3>
          <span className="text-primary font-display font-bold text-lg whitespace-nowrap">
            ${item.price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body">
          {item.description}
        </p>
        <div className="flex items-center justify-end gap-2">
          {quantity > 0 ? (
            <div className="flex items-center gap-3 bg-muted rounded-full px-1 py-1">
              <button
                onClick={onRemove}
                className="w-8 h-8 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-background transition-colors border border-border"
              >
                <Minus size={14} />
              </button>
              <span className="font-body font-semibold text-sm min-w-[1.25rem] text-center text-foreground">
                {quantity}
              </span>
              <button
                onClick={onAdd}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={onAdd}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium font-body hover:opacity-90 transition-opacity"
            >
              <Plus size={14} />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
