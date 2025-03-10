
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IntelliAgent from "./pages/IntelliAgent";
import HowItWorks from "./pages/HowItWorks";
import AdaptiveIntelligence from "./pages/AdaptiveIntelligence";
import Documentation from "./pages/Documentation";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AgentBuilder from "./pages/AgentBuilder";
import AiChatSpace from "./pages/AiChatSpace";
import CodeStudio from "./pages/CodeStudio";
import ResearchSpace from "./pages/ResearchSpace";
import ContentAgent from "./pages/ContentAgent";
import Subscription from "./pages/Subscription";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/intelliagent" element={<IntelliAgent />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/adaptive-intelligence" element={<AdaptiveIntelligence />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/agent-builder" element={<AgentBuilder />} />
          <Route path="/ai-chat" element={<AiChatSpace />} />
          <Route path="/code-studio" element={<CodeStudio />} />
          <Route path="/research-space" element={<ResearchSpace />} />
          <Route path="/content-agent" element={<ContentAgent />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
