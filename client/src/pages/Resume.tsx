import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/constants/data";

export default function Resume() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-page-title">
              Resume
            </h1>
            <div className="flex gap-3">
              <Button size="lg" asChild data-testid="button-view-resume">
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View PDF
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-download-resume">
                <a href={personalInfo.resumeUrl} download="Hiten_Gupta_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-lg overflow-hidden shadow-lg">
            <embed
              src={`${personalInfo.resumeUrl}#toolbar=0`}
              type="application/pdf"
              className="w-full h-[85vh]"
              title="Resume PDF"
              data-testid="embed-resume"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              PDF not displaying correctly? 
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
                data-testid="link-view-fallback"
              >
                Open in new tab
              </a>
              {" "}or{" "}
              <a 
                href={personalInfo.resumeUrl} 
                download="Hiten_Gupta_Resume.pdf"
                className="text-primary hover:underline"
                data-testid="link-download-fallback"
              >
                download directly
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
