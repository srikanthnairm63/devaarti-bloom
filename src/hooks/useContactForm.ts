import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const useContactForm = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const { error } = await supabase.from("contacts").insert([data]);

      if (error) {
        throw new Error(error.message);
      }

      return true;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your enquiry. We'll get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });
};
