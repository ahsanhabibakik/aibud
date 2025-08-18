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
  Menu as MenuIcon
} from 'lucide-react';

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
    triggerType: 'icon' | 'text'; // 'icon' for menu icon, 'text' for name+arrow
    triggerText?: string; // Used when triggerType is 'text'
    items: DropdownItem[];
  };
}

// Dropdown menu items (other routes/pages)
export const dropdownMenuItems: DropdownItem[] = [
  {
    name: 'Blog',
    href: '/blog',
    icon: BookOpen,
    description: 'Latest insights and updates'
  },
  {
    name: 'Privacy Policy',
    href: '/privacy',
    icon: Shield,
    description: 'Our privacy commitment'
  },
  {
    name: 'Cookie Policy', 
    href: '/cookie-policy',
    icon: Settings,
    description: 'Cookie usage information'
  }
];

// Page-specific navigation configurations
export const pageNavConfigs: Record<string, PageNavConfig> = {
  // Home Page Configuration (main landing page)
  '/': {
    sections: [
      { name: 'Home', id: 'hero', icon: Home },
      { name: 'Audience', id: 'audience', icon: Users },
      { name: 'Product', id: 'product', icon: Sparkles },
      { name: 'Services', id: 'services', icon: Settings },
      { name: 'Partners', id: 'partners', icon: Handshake },
      { name: 'Integrations', id: 'integrations', icon: Plug },
      { name: 'Process', id: 'process', icon: Target },
      { name: 'Agent', id: 'agent', icon: Bot, href: '/agent', isRoute: true },
      { name: 'CXO', id: 'fractionalcxo', icon: Phone, href: '/fractionalcxo', isRoute: true },
      { name: 'Portfolio', id: 'portfolio', icon: Briefcase, href: '/portfolio', isRoute: true },
    ],
    showAfterScroll: 0.03,
    dropdown: {
      enabled: true,
      triggerType: 'icon',
      items: dropdownMenuItems
    }
  },

  // Agent Page Configuration - ONLY agent page sections
  '/agent': {
    sections: [
      { name: 'Home', id: 'home', icon: Home, href: '/', isRoute: true },
      { name: 'Benefits', id: 'benefits', icon: Award },
      { name: 'Use Cases', id: 'use-cases', icon: Target },
      { name: 'Inside', id: 'inside', icon: Settings },
      { name: 'Process', id: 'process', icon: Zap },
      { name: 'Metrics', id: 'metrics', icon: TrendingUp },
      { name: 'Principles', id: 'principles', icon: Shield },
      { name: 'CXO', id: 'fractionalcxo', icon: Building, href: '/fractionalcxo', isRoute: true },
      { name: 'Portfolio', id: 'portfolio', icon: Briefcase, href: '/portfolio', isRoute: true },
    ],
    showAfterScroll: 0.05,
    dropdown: {
      enabled: true,
      triggerType: 'text',
      triggerText: 'More',
      items: dropdownMenuItems
    }
  },

  // Fractional CXO Page Configuration - ONLY CXO sections
  '/fractionalcxo': {
    sections: [
      { name: 'Home', id: 'home', icon: Home, href: '/', isRoute: true },
      { name: 'Audience', id: 'audience', icon: Users },
      { name: 'Problems', id: 'problems', icon: Target },
      { name: 'Deliverables', id: 'deliverables', icon: Settings },
      { name: 'Process', id: 'process', icon: Zap },
      { name: 'Roles', id: 'roles', icon: Building },
      { name: 'Proof', id: 'proof', icon: Award },
      { name: 'Agent', id: 'agent', icon: Bot, href: '/agent', isRoute: true },
      { name: 'Portfolio', id: 'portfolio', icon: Briefcase, href: '/portfolio', isRoute: true },
    ],
    showAfterScroll: 0.05,
    dropdown: {
      enabled: true,
      triggerType: 'text',
      triggerText: 'More',
      items: dropdownMenuItems
    }
  },

  // Portfolio Page Configuration - Section-wise navigation
  '/portfolio': {
    sections: [
      { name: 'Home', id: 'home', icon: Home, href: '/', isRoute: true },
      { name: 'Flagship', id: 'flagship-product', icon: Sparkles },
      { name: 'Products', id: 'product-grid', icon: Briefcase },
      { name: 'Partners', id: 'partners', icon: Handshake },
      { name: 'FAQ', id: 'faq', icon: Target },
      { name: 'Agent', id: 'agent', icon: Bot, href: '/agent', isRoute: true },
      { name: 'CXO', id: 'fractionalcxo', icon: Phone, href: '/fractionalcxo', isRoute: true },
    ],
    showAfterScroll: 0.05,
    dropdown: {
      enabled: true,
      triggerType: 'text',
      triggerText: 'More',
      items: dropdownMenuItems
    }
  },

  // Blog Page Configuration
  '/blog': {
    sections: [
      { name: 'Home', id: 'home', icon: Home, href: '/', isRoute: true },
      { name: 'Agent', id: 'agent', icon: Bot, href: '/agent', isRoute: true },
      { name: 'CXO', id: 'fractionalcxo', icon: Phone, href: '/fractionalcxo', isRoute: true },
      { name: 'Portfolio', id: 'portfolio', icon: Briefcase, href: '/portfolio', isRoute: true },
    ],
    showAfterScroll: 0.05,
    dropdown: {
      enabled: false, // No dropdown needed for blog page
      triggerType: 'icon',
      items: []
    }
  }
};

// Helper function to get configuration for current page
export const getPageNavConfig = (pathname: string): PageNavConfig => {
  // Handle blog post dynamic routes
  if (pathname.startsWith('/blog/')) {
    return pageNavConfigs['/blog'];
  }
  
  // Clean pathname (remove trailing slash if present)
  const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  
  return pageNavConfigs[cleanPath] || pageNavConfigs['/'];
};

// Helper function to get sections that are actual page sections (not routes)
export const getPageSections = (sections: MenuSection[]): MenuSection[] => {
  return sections.filter(section => !section.isRoute);
};

// Helper function to get route sections
export const getRouteSections = (sections: MenuSection[]): MenuSection[] => {
  return sections.filter(section => section.isRoute);
};