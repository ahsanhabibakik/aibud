"use client";

import { useState, useEffect } from 'react';
import { Cookie, Shield, BarChart3, Target, Settings, ExternalLink } from 'lucide-react';
import { getCookieConsent, setCookieConsent, clearCookieConsent } from '@/lib/cookies';

export default function CookiePolicyClient() {
  const [currentConsent, setCurrentConsent] = useState<any>(null);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = getCookieConsent();
    setCurrentConsent(consent);
    if (consent) {
      setPreferences({
        necessary: consent.necessary,
        analytics: consent.analytics,
        marketing: consent.marketing
      });
    }
  }, []);

  const handleSavePreferences = () => {
    setCookieConsent(preferences);
    setCurrentConsent({ ...preferences, timestamp: Date.now() });
    
    // Show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    successDiv.textContent = 'Cookie preferences saved successfully!';
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
      document.body.removeChild(successDiv);
    }, 3000);
  };

  const handleClearConsent = () => {
    clearCookieConsent();
    setCurrentConsent(null);
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
    
    // Show clear message
    const clearDiv = document.createElement('div');
    clearDiv.className = 'fixed top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    clearDiv.textContent = 'Cookie preferences cleared. Please refresh to see the consent banner.';
    document.body.appendChild(clearDiv);
    
    setTimeout(() => {
      document.body.removeChild(clearDiv);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-purple-500/20 rounded-full mb-6">
            <Cookie className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn about how AI Buddy uses cookies to enhance your browsing experience and protect your privacy.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        {/* Current Consent Status */}
        <section id="current-settings" className="mb-8">
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
            <Settings className="w-6 h-6 text-purple-400 mr-3" />
            Your Current Cookie Preferences
          </h2>
          
          {currentConsent ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-lg border ${currentConsent.necessary ? 'bg-green-500/20 border-green-500/50' : 'bg-gray-700/50 border-gray-600'}`}>
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-green-400 mr-2" />
                    <span className="font-medium">Necessary</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {currentConsent.necessary ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                
                <div className={`p-4 rounded-lg border ${currentConsent.analytics ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-700/50 border-gray-600'}`}>
                  <div className="flex items-center mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="font-medium">Analytics</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {currentConsent.analytics ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                
                <div className={`p-4 rounded-lg border ${currentConsent.marketing ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-700/50 border-gray-600'}`}>
                  <div className="flex items-center mb-2">
                    <Target className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="font-medium">Marketing</span>
                  </div>
                  <span className="text-sm text-gray-300">
                    {currentConsent.marketing ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-400">
                Last updated: {new Date(currentConsent.timestamp).toLocaleString()}
              </p>
            </div>
          ) : (
            <div className="text-center py-8">
              <Cookie className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No cookie preferences set yet. Please set your preferences below.</p>
            </div>
          )}
          </div>
        </section>

        {/* Cookie Preference Controls */}
        <section id="preferences" className="mb-8">
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-6">Update Your Preferences</h2>
          
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2">Necessary Cookies</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Essential for the website to function properly. These cookies enable core functionality 
                    such as security, network management, and accessibility.
                  </p>
                  <p className="text-xs text-gray-500">
                    Examples: Session cookies, security tokens, consent preferences
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Always On
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Help us understand how visitors interact with our website by collecting and 
                    reporting information anonymously.
                  </p>
                  <p className="text-xs text-gray-500">
                    Examples: Google Analytics, page views, user behavior patterns
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.analytics ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white mb-2">Marketing Cookies</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Used to track visitors across websites and display relevant advertisements 
                    and marketing content.
                  </p>
                  <p className="text-xs text-gray-500">
                    Examples: Ad targeting, social media pixels, conversion tracking
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    preferences.marketing ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-700">
            <button
              onClick={handleSavePreferences}
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Save Preferences
            </button>
            <button
              onClick={handleClearConsent}
              className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              Clear All Preferences
            </button>
          </div>
          </div>
        </section>

        {/* Detailed Policy Content */}
        <section id="policy-details" className="mb-8">
          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Cookie Policy Details</h2>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">What are cookies?</h3>
                <p className="leading-relaxed mb-4">
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information to the owners of the site.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">How we use cookies</h3>
                <p className="leading-relaxed mb-4">
                  AI Buddy uses cookies to enhance your browsing experience and provide you with personalized content. 
                  We respect your privacy and give you control over your cookie preferences.
                </p>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 my-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Types of cookies we use:</h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-300">
                    <li><strong>Necessary cookies:</strong> Essential for website functionality</li>
                    <li><strong>Analytics cookies:</strong> Help us understand user behavior</li>
                    <li><strong>Marketing cookies:</strong> Enable personalized advertising</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">Third-party cookies</h3>
                <p className="leading-relaxed mb-4">
                  We may use third-party services that place cookies on your device. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>Google Tag Manager:</strong> For managing marketing and analytics tags</li>
                  <li><strong>Calendly:</strong> For scheduling and appointment booking functionality</li>
                </ul>
              </section>

              <section id="your-rights">
                <h3 className="text-2xl font-semibold text-white mb-4">Your rights and choices</h3>
                <p className="leading-relaxed mb-4">
                  You have the right to accept or reject cookies. You can exercise your cookie preferences by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Using the cookie preference controls on this page</li>
                  <li>Clearing your browser&apos;s cookie storage</li>
                  <li>Adjusting your browser settings to block cookies</li>
                </ul>
                
                <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 my-4">
                  <p className="text-sm text-blue-200">
                    <strong>Note:</strong> Blocking necessary cookies may affect website functionality.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">Cookie retention</h3>
                <p className="leading-relaxed mb-4">
                  Your cookie preferences are stored for up to 1 year. After this period, you will be asked 
                  to provide your consent again. You can update your preferences at any time by visiting this page.
                </p>
              </section>

              <section id="contact">
                <h3 className="text-2xl font-semibold text-white mb-4">Contact us</h3>
                <p className="leading-relaxed mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <p className="mb-2"><strong>Email:</strong> privacy@agentgg.ai</p>
                  <p className="mb-2"><strong>Website:</strong> <a href="https://aibud.ca" className="text-purple-400 hover:text-purple-300">aibud.ca</a></p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-white mb-4">Updates to this policy</h3>
                <p className="leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time. When we do, we will revise the 
                  &ldquo;Last updated&rdquo; date at the bottom of this page. We encourage you to review this policy 
                  periodically to stay informed about how we use cookies.
                </p>
              </section>

              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mt-8">
                <p className="text-sm text-gray-400 text-center">
                  <strong>Last updated:</strong> January 2025
                </p>
                <div className="flex justify-center mt-4">
                  <a 
                    href="/privacy" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Privacy Policy
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}