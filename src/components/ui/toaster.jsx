// src/components/ui/toaster.jsx
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@radix-ui/react-toast"; // Direct import from Radix UI
import { useToast } from "@/hooks/use-toast"; // Your existing useToast hook
import { X } from "lucide-react"; // For the close icon
import { cva } from "class-variance-authority"; // For styling variants (if you have it installed)
import { cn } from "@/lib/utils"; // Your utility for class names

// --- Toast Variants (styling definition) ---
// You'll need 'class-variance-authority' if you don't have it: npm install class-variance-authority
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border-green-400 bg-green-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// --- Actual Toaster Component ---
export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className={cn(toastVariants({ variant: props.variant }))}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose>
              <X className="h-4 w-4" />
            </ToastClose>
          </Toast>
        );
      })}
      <ToastViewport
        className={cn(
          "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        )}
      />
    </ToastProvider>
  );
}

// Install dependency for styling variants if not already:
// npm install class-variance-authority