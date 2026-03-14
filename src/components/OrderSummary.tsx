import type { MenuItem } from "@/data/menuData";
import { ShoppingBag, X } from "lucide-react";

interface OrderItem {
  item: MenuItem;
  quantity: number;
}

interface OrderSummaryProps {
  orders: OrderItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClear: () => void;
}

const OrderSummary = ({ orders, isOpen, onToggle, onClear }: OrderSummaryProps) => {
  const totalItems = orders.reduce((sum, o) => sum + o.quantity, 0);
  const totalPrice = orders.reduce((sum, o) => sum + o.item.price * o.quantity, 0);

  if (totalItems === 0 && !isOpen) return null;

  return (
    <>
      {/* Floating cart button (mobile) */}
      {!isOpen && totalItems > 0 && (
        <button
          onClick={onToggle}
          className="fixed bottom-6 right-6 z-50 lg:hidden bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        >
          <ShoppingBag size={22} />
          <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        </button>
      )}

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-card border-l border-border z-50 transform transition-transform duration-300 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-display text-xl font-bold text-foreground">Your Order</h2>
            <button
              onClick={onToggle}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orders.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-12 font-body">
                Your order is empty
              </p>
            ) : (
              orders.map((order) => (
                <div
                  key={order.item.id}
                  className="flex items-center gap-3 bg-muted/50 rounded-lg p-3"
                >
                  <img
                    src={order.item.image}
                    alt={order.item.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-sm text-foreground truncate">
                      {order.item.name}
                    </p>
                    <p className="text-muted-foreground text-xs font-body">
                      {order.quantity} × ${order.item.price}
                    </p>
                  </div>
                  <span className="font-display font-bold text-foreground">
                    ${order.item.price * order.quantity}
                  </span>
                </div>
              ))
            )}
          </div>

          {orders.length > 0 && (
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-body">Total</span>
                <span className="font-display text-2xl font-bold text-foreground">
                  ${totalPrice}
                </span>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity">
                Place Order
              </button>
              <button
                onClick={onClear}
                className="w-full text-muted-foreground py-2 text-sm font-body hover:text-foreground transition-colors"
              >
                Clear Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40 backdrop-blur-sm"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default OrderSummary;
