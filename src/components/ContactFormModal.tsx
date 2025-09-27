import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import ContactForm from "@/pages/ContactForm";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const ContactFormModal = ({ 
  isOpen, 
  onClose,
  title = "Start Your Fitness Journey"  // default title
}: ContactFormModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] w-[95vw] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-primary rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="p-6 pt-2 overflow-y-auto">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;