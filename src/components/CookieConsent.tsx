"use client";

import { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3 } from 'lucide-react';
import { getCookieConsent, setCookieConsent, initializeGTMConsent } from '@/lib/cookies';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add delay to ensure proper mounting and avoid layout shift
    const timer = setTimeout(() => {
      const consent = getCookieConsent();
      if (!consent) {
        setIsVisible(true);
      }
    }, 500);
    
    // Initialize GTM consent mode
    initializeGTMConsent();
    
    return () => clearTimeout(timer);
  }, []);

  // Don't render on server or before mounted
  if (!mounted) return null;

  const acceptAll = () => {
    setCookieConsent({
      necessary: true,
      analytics: true,
      marketing: true
    });
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    setCookieConsent({
      necessary: true,
      analytics: false,
      marketing: false
    });
    setIsVisible(false);
  };

  const customizeConsent = (necessary: boolean, analytics: boolean, marketing: boolean) => {
    setCookieConsent({
      necessary,
      analytics,
      marketing
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Full-screen backdrop - positioned separately */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-9998" 
        onClick={() => setIsVisible(false)} 
      />
      
      {/* Cookie consent modal container */}
      <div className="fixed bottom-4 left-4 right-4 z-9999">
        {/* Cookie consent modal */}
        <div className="relative max-w-2xl mx-auto w-full bg-gray-900/95 border border-gray-700 rounded-2xl shadow-2xl backdrop-blur-md">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Cookie className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Cookie Preferences</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
            By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
          </p>

          {!showDetails ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Accept All Cookies
              </button>
              <button
                onClick={acceptNecessary}
                className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-colors"
              >
                Customize
              </button>
            </div>
          ) : (
            <CookieDetails onSave={customizeConsent} onBack={() => setShowDetails(false)} />
          )}

          <div className="mt-4 text-center space-x-4">
            <a
              href="/cookie-policy"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors underline"
            >
              Cookie Policy
            </a>
            <span className="text-gray-500">•</span>
            <a
              href="/privacy"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

function CookieDetails({ onSave, onBack }: { 
  onSave: (necessary: boolean, analytics: boolean, marketing: boolean) => void;
  onBack: () => void;
}) {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: true
  });

  const cookieTypes = [
    {
      key: 'necessary' as const,
      name: 'Necessary Cookies',
      description: 'Essential for the website to function properly. Cannot be disabled.',
      icon: Shield,
      required: true
    },
    {
      key: 'analytics' as const,
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      icon: BarChart3,
      required: false
    },
    {
      key: 'marketing' as const,
      name: 'Marketing Cookies',
      description: 'Used to track visitors and display relevant ads.',
      icon: Cookie,
      required: false
    }
  ];

  return (
    <div className="space-y-4">
      {cookieTypes.map((type) => {
        const Icon = type.icon;
        return (
          <div key={type.key} className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                <Icon className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white mb-1">{type.name}</h4>
                <p className="text-sm text-gray-400">{type.description}</p>
              </div>
            </div>
            <div className="ml-4">
              {type.required ? (
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Required
                </div>
              ) : (
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, [type.key]: !prev[type.key] }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences[type.key] ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences[type.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              )}
            </div>
          </div>
        );
      })}

      <div className="flex gap-3 pt-4">
        <button
          onClick={() => onSave(preferences.necessary, preferences.analytics, preferences.marketing)}
          className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
        >
          Save Preferences
        </button>
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
}