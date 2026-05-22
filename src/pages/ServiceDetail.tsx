import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, CheckCircle2, ExternalLink, Search, MapPin, Building2, Globe, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SERVICE_DATA, STATES_AND_UTS, type ServicePortal } from "@/lib/service-data";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const serviceName = serviceId ? decodeURIComponent(serviceId) : "";
  const serviceInfo = SERVICE_DATA[serviceName];

  const filteredCentralPortals = useMemo(() => {
    if (!serviceInfo) return [];
    return serviceInfo.central.filter(portal => 
      portal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portal.actions.some(action => action.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [serviceInfo, searchQuery]);

  const statePortals = useMemo(() => {
    if (!serviceInfo || !selectedState) return [];
    
    // Check if there are specific portals for this state in the service data
    if (serviceInfo.stateSpecific && serviceInfo.stateSpecific[selectedState]) {
      return serviceInfo.stateSpecific[selectedState].filter(portal => 
        portal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        portal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        portal.actions.some(action => action.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Fallback to templates
    return serviceInfo.stateTemplates.map(template => ({
      id: `${selectedState}-${template.name}`,
      name: `${selectedState} ${template.name}`,
      description: template.description,
      actions: template.actions,
      url: template.urlPattern.replace(/{state}/g, encodeURIComponent(selectedState))
    })).filter(portal => 
      portal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portal.actions.some(action => action.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [serviceInfo, selectedState, searchQuery]);

  if (!serviceInfo) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg">The service category you are looking for does not exist.</p>
          <Button onClick={() => navigate("/")} size="lg" className="gradient-saffron text-accent-foreground font-bold">
            Return to Dashboard
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title={`${serviceName} | Official Government Dashboard`} 
        description={`Professional government dashboard for ${serviceName}. Access real-time central and state-specific portals.`}
      />
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - State Selector */}
        <aside className="hidden lg:flex w-72 border-r bg-muted/20 flex-col shrink-0 shadow-sm">
          <div className="p-6 border-b bg-card/50 backdrop-blur-sm">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Regional Selection
            </h3>
            <p className="text-xs text-muted-foreground mt-1">Select a State/UT for localized portals</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            <button
              onClick={() => setSelectedState(null)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 flex items-center gap-3 group",
                !selectedState 
                  ? "bg-primary text-primary-foreground shadow-md font-semibold" 
                  : "hover:bg-muted text-foreground/80 hover:text-foreground"
              )}
            >
              <LayoutDashboard className={cn("w-4 h-4", !selectedState ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary")} />
              All Central Portals
            </button>
            
            <div className="flex items-center gap-2 my-4 px-2">
              <div className="h-px bg-border flex-1" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">States & UTs</span>
              <div className="h-px bg-border flex-1" />
            </div>

            {STATES_AND_UTS.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={cn(
                  "w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
                  selectedState === state 
                    ? "bg-accent text-accent-foreground shadow-sm font-semibold" 
                    : "hover:bg-muted text-foreground/70 hover:text-foreground"
                )}
              >
                {state}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-background/50 relative custom-scrollbar">
          <div className="max-w-7xl mx-auto p-6 md:p-10 lg:p-12">
            
            {/* Page Header */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
            >
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="-ml-2 gap-2 text-muted-foreground hover:text-primary transition-colors" 
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portal Home
                </Button>
                <div className="flex items-center gap-4 flex-wrap">
                  <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
                    {serviceName}
                  </h2>
                  <AnimatePresence mode="wait">
                    {selectedState && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <Badge variant="secondary" className="text-lg py-1.5 px-4 border-accent/20 bg-accent/10 text-accent font-bold">
                          {selectedState}
                        </Badge>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  {selectedState 
                    ? `Showing official ${serviceName} portals localized for the residents of ${selectedState}.`
                    : `Access comprehensive central government platforms for ${serviceName} across India.`}
                </p>
              </div>
              
              <div className="relative w-full md:w-80 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input 
                  placeholder="Search schemes or portals..." 
                  className="pl-12 h-12 bg-card border-border/50 shadow-sm rounded-xl focus-visible:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>

            {/* Content Sections */}
            <AnimatePresence mode="wait">
              {!selectedState ? (
                <motion.div 
                  key="central"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Central Government Services</h3>
                      <p className="text-sm text-muted-foreground">National level unified platforms</p>
                    </div>
                  </div>
                  
                  {filteredCentralPortals.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {filteredCentralPortals.map((portal, idx) => (
                        <PortalCard key={portal.id} portal={portal} index={idx} />
                      ))}
                    </div>
                  ) : (
                    <NoResults />
                  )}
                </motion.div>
              ) : (
                <motion.div 
                  key="state"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedState} Portals</h3>
                      <p className="text-sm text-muted-foreground">State-specific localized services</p>
                    </div>
                  </div>
                  
                  {statePortals.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {statePortals.map((portal, idx) => (
                        <PortalCard key={portal.id} portal={portal as ServicePortal} index={idx} />
                      ))}
                    </div>
                  ) : (
                    <NoResults />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function PortalCard({ portal, index }: { portal: ServicePortal; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card rounded-2xl border border-border/40 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-all" />
      
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h4 className="font-extrabold text-xl group-hover:text-primary transition-colors leading-tight">
            {portal.name}
          </h4>
          <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors shrink-0">
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {portal.description}
        </p>
      </div>
      
      <div className="flex-1 space-y-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="h-px bg-border flex-1" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60">Services Provided</p>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="flex flex-wrap gap-2">
          {portal.actions.map((action, i) => (
            <span 
              key={i} 
              className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-muted/50 border border-border/50 px-2.5 py-1 rounded-full text-foreground/80 group-hover:bg-primary/5 transition-colors"
            >
              <CheckCircle2 className="w-3 h-3 text-success shrink-0" />
              {action}
            </span>
          ))}
        </div>
      </div>

      <Button 
        asChild
        className="w-full mt-auto gradient-saffron text-accent-foreground font-bold h-12 rounded-xl shadow-lg hover:shadow-saffron/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        <a href={portal.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
          Access Official Portal
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
    </motion.div>
  );
}

function NoResults() {
  return (
    <div className="py-20 text-center bg-muted/10 rounded-3xl border-2 border-dashed border-border/50">
      <div className="inline-flex p-4 bg-muted rounded-full mb-4">
        <Search className="w-8 h-8 text-muted-foreground" />
      </div>
      <h4 className="text-xl font-bold mb-2">No Portals Found</h4>
      <p className="text-muted-foreground">Try adjusting your search keywords or selection.</p>
    </div>
  );
}
