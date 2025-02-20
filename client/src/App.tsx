import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Demo from "@/pages/demo";
import Trial from "@/pages/trial";
import { CursorOverlay } from "@/components/cursor-overlay";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/demo" component={Demo} />
      <Route path="/trial" component={Trial} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <CursorOverlay />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;