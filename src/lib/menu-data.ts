import {
  Home,
  Users,
  Sparkles,
  Settings,
  Handshake,
  Plug,
  Target,
  Phone,
  BookOpen,
  Bot,
  Briefcase,
  Award,
  Zap,
  TrendingUp,
  Shield,
  Building,
  ChevronDown,
  Menu as MenuIcon,
  Search,
  Filter,
  Cookie,
  BarChart3,
  FileText,
  Eye,
  Lock,
  HelpCircle,
  MessageSquare,
  Mail,
} from "lucide-react";

export interface MenuSection {
  name: string;
  id: string;
  icon: React.ComponentType<any>;
  href?: string;
  isRoute?: boolean;
}

export interface DropdownItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  description?: string;
}

export interface PageNavConfig {
  sections: MenuSection[];
  showAfterScroll: number;
  dropdown?: {
    enabled: boolean;
    triggerType: "icon" | "text"; // 'icon' for menu icon, 'text' for name+arrow
    triggerText?: string; // Used when triggerType is 'text'
    items: DropdownItem[];
  };
}

// Dropdown menu items (other routes/pages)
export const dropdownMenuItems: DropdownItem[] = [
  { name: "Agent", icon: Bot, href: "/agent" },
  { name: "CXO", icon: Phone, href: "/fractionalcxo" },
  {
    name: "Blog",
    href: "/blog",
    icon: BookOpen,
    description: "Latest insights and updates",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
    icon: Shield,
    description: "Our privacy commitment",
  },
  {
    name: "Cookie Policy",
    href: "/cookie-policy",
    icon: Settings,
    description: "Cookie usage information",
  },
];

// Page-specific navigation configurations
export const pageNavConfigs: Record<string, PageNavConfig> = {
  // Home Page Configuration (main landing page)
  "/": {
    sections: [
      { name: "Home", id: "hero", icon: Home },
      // { name: "Audience", id: "audience", icon: Users },
      { name: "Product", id: "product", icon: Sparkles },
      { name: "Services", id: "services", icon: Settings },
      { name: "Partners", id: "partners", icon: Handshake },
      { name: "Integrations", id: "integrations", icon: Plug },
      { name: "Process", id: "process", icon: Target },

      {
        name: "Portfolio",
        id: "portfolio",
        icon: Briefcase,
        href: "/portfolio",
        isRoute: true,
      },
    ],
    showAfterScroll: 0.03,
    dropdown: {
      enabled: true,
      triggerType: "icon",
      items: dropdownMenuItems,
    },
  },

  // Agent Page Configuration - ONLY agent page sections
  "/agent": {
    sections: [
      { name: "Benefits", id: "benefits", icon: Award },
      { name: "Use Cases", id: "use-cases", icon: Target },
      { name: "Inside", id: "inside", icon: Settings },
      { name: "Process", id: "process", icon: Zap },
      { name: "Metrics", id: "metrics", icon: TrendingUp },
      { name: "Principles", id: "principles", icon: Shield },
      {
        name: "CXO",
        id: "fractionalcxo",
        icon: Building,
        href: "/fractionalcxo",
        isRoute: true,
      },
      {
        name: "Portfolio",
        id: "portfolio",
        icon: Briefcase,
        href: "/portfolio",
        isRoute: true,
      },
    ],
    showAfterScroll: 0.03,
    dropdown: {
      enabled: true,
      triggerType: "icon",
      items: dropdownMenuItems,
    },
  },

  // Fractional CXO Page Configuration - ONLY CXO sections
  "/fractionalcxo": {
    sections: [
      { name: "Audience", id: "audience", icon: Users },
      { name: "Problems", id: "problems", icon: Target },
      { name: "Deliverables", id: "deliverables", icon: Settings },
      { name: "Process", id: "process", icon: Zap },
      { name: "Roles", id: "roles", icon: Building },
      { name: "Proof", id: "proof", icon: Award },

      {
        name: "Portfolio",
        id: "portfolio",
        icon: Briefcase,
        href: "/portfolio",
        isRoute: true,
      },
    ],
    showAfterScroll: 0.03,
    dropdown: {
      enabled: true,
      triggerType: "icon",
      items: dropdownMenuItems,
    },
  },

  // Portfolio Page Configuration - Section-wise navigation
  "/portfolio": {
    sections: [
      { name: "Flagship", id: "flagship-product", icon: Sparkles },
      { name: "Products", id: "product-grid", icon: Briefcase },
      { name: "Partners", id: "partners", icon: Handshake },
      { name: "FAQ", id: "faq", icon: Target },
    ],
    showAfterScroll: 0.03,
    dropdown: {
      enabled: true,
      triggerType: "icon",
      items: dropdownMenuItems,
    },
  },

  // Blog Page Configuration
  "/blog": {
    sections: [
      { name: "Home", id: "home", icon: Home, href: "/", isRoute: true },
      { name: "Search", id: "search", icon: Search },
      { name: "Categories", id: "categories", icon: Filter },
      { name: "Articles", id: "articles", icon: BookOpen },
      {
        name: "Portfolio",
        id: "portfolio",
        icon: Briefcase,
        href: "/portfolio",
        isRoute: true,
      },
    ],
    showAfterScroll: 0.05,
    dropdown: {
      enabled: true,
      triggerType: "icon",
      items: dropdownMenuItems.filter(item => item.href !== "/blog"),
    },
  },

  // Privacy Policy Page Configuration
  "/privacy": {
    sections: [
      { name: "Home", id: "home", icon: Home, href: "/", isRoute: true },
      { name: "Overview", id: "overview", icon: Eye },
      { name: "Data Collection", id: "data-collection", icon: FileText },
      { name: "Your Rights", id: "your-rights", icon: Shield },
      { name: "Security", id: "security", icon: Lock },
      { name: "Contact", id: "contact", icon: Mail },
      {
        name: "Cookie Policy",
        id: "cookie-policy",
        icon: Cookie,
        href: "/cookie-policy",
        isRoute: true,
      },
    ],
    showAfterScroll: 0.05,
    dropdown: {
      enabled: true,
      triggerType: "icon",
      items: dropdownMenuItems.filter(item => item.href !== "/privacy"),
    },
  },

  // Cookie Policy Page Configuration
  "/cookie-policy": {
    sections: [
      { name: "Home", id: "home", icon: Home, href: "/", isRoute: true },
      { name: "Current Settings", id: "current-settings", icon: Settings },
      { name: "Preferences", id: "preferences", icon: Target },
      { name: "Policy Details", id: "policy-details", icon: FileText },
      { name: "Your Rights", id: "your-rights", icon: Shield },
      { name: "Contact", id: "contact", icon: HelpCircle },
      {
        name: "Privacy Policy",
        id: "privacy",
        icon: Lock,
        href: "/privacy",
        isRoute: true,
      },
    ],
    showAfterScroll: 0.05,
    dropdown: {
      enabled: true,
      triggerType: "icon",
      items: dropdownMenuItems.filter(item => item.href !== "/cookie-policy"),
    },
  },
};

// Helper function to get configuration for current page
export const getPageNavConfig = (pathname: string): PageNavConfig => {
  // Handle blog post dynamic routes
  if (pathname.startsWith("/blog/")) {
    return pageNavConfigs["/blog"];
  }

  // Clean pathname (remove trailing slash if present)
  const cleanPath =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;

  return pageNavConfigs[cleanPath] || pageNavConfigs["/"];
};

// Helper function to get sections that are actual page sections (not routes)
export const getPageSections = (sections: MenuSection[]): MenuSection[] => {
  return sections.filter((section) => !section.isRoute);
};

// Helper function to get route sections
export const getRouteSections = (sections: MenuSection[]): MenuSection[] => {
  return sections.filter((section) => section.isRoute);
};
