import { useState, useMemo } from "react";
import { ShoppingBag } from "lucide-react";
import { menuItems, type Category } from "@/data/menuData";
import CategoryFilter from "@/components/CategoryFilter";
import MenuCard from "@/components/MenuCard";
import OrderSummary from "@/components/OrderSummary";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? menuItems
        : menuItems.filter((i) => i.category === activeCategory),
    [activeCategory]
  );

  const addItem = (id: string) => setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const removeItem = (id: string) =>
    setCart((prev) => {
      const qty = (prev[id] || 0) - 1;
      if (qty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: qty };
    });

  const orderItems = Object.entries(cart)
    .map(([id, quantity]) => ({
      item: menuItems.find((i) => i.id === id)!,
      quantity,
    }))
    .filter((o) => o.item);

  const totalItems = orderItems.reduce((sum, o) => sum + o.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">La Tavola</h1>
            <p className="text-muted-foreground text-xs font-body tracking-wide">RISTORANTE & BAR</p>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative hidden lg:flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-body font-medium text-foreground hover:bg-muted transition-colors"
          >
            <ShoppingBag size={16} />
            <span>Order</span>
            {totalItems > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">Our Menu</h2>
          <p className="text-muted-foreground font-body">Fresh ingredients, crafted with passion</p>
        </div>

        <div className="mb-8">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              quantity={cart[item.id] || 0}
              onAdd={() => addItem(item.id)}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </div>
      </main>

      <OrderSummary
        orders={orderItems}
        isOpen={cartOpen}
        onToggle={() => setCartOpen(!cartOpen)}
        onClear={() => {
          setCart({});
          setCartOpen(false);
        }}
      />
    </div>
  );
};

export default Index;
