import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to exciting AI opportunities and collaborations
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_50px_hsl(var(--primary)/0.3)]">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <a
              href="mailto:sklegacy789@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">sklegacy789@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+917033241380"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground">+91 7033241380</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground">Chandigarh, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/sumitkumar22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="https://github.com/Sumit22012004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
              onClick={() => window.location.href = "mailto:sklegacy789@gmail.com"}
            >
              Send a Message
            </Button>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            © 2025 Sumit Kumar. Built with passion for AI innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
