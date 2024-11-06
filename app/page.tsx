import React from 'react';
import Link from 'next/link';  // Add this import
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';

const PricingTier = ({ title, price, features, isPopular }) => (
  <Card className={`w-full max-w-sm ${isPopular ? 'border-blue-500 border-2' : ''}`}>
    <CardHeader>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      <CardDescription className="text-2xl font-bold">
        {price === 'Custom' ? price : `$${price}/mo`}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Link href="/dashboard" className="w-full">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

const LandingPage = () => {
  const pricingTiers = [
    {
      title: 'Free Investor',
      price: '0',
      features: [
        '5 AI translations per month',
        'Basic stock screening features',
        'Weekly top 10 stocks updates',
        'Save one screening strategy'
      ]
    },
    {
      title: 'Advanced Investor',
      price: '10',
      features: [
        '40 AI translations per day',
        'Daily top 10 stocks updates',
        'Save up to 3 screening strategies',
        'Use 2 strategies simultaneously',
        'Email notifications',
        '30-day performance tracking'
      ],
      isPopular: true
    },
    {
      title: 'Pro Investor',
      price: '20',
      features: [
        'Unlimited AI translations',
        'Daily top 10 stocks updates',
        'Save up to 10 screening strategies',
        'Use 3 strategies simultaneously',
        'Advanced email notifications',
        'Extended performance tracking'
      ]
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: [
        'Increased API limits',
        'Advanced access features',
        'Team collaboration tools',
        'Advanced financial modeling',
        'Custom integrations',
        'Dedicated support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              AI-Enhanced Stock Analysis
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Customize your stock screening strategy with AI-powered insights and real-time analytics.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-x-4">
              {/* Update the button section to include two buttons */}
              <Link href="/dashboard">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                  Go to Dashboard
                </Button>
              </Link>
              <Link href="#pricing">
                <Button variant="outline" className="w-full sm:w-auto mt-3 sm:mt-0">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Key Features
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">AI-Powered Screening</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Transform your investment ideas into precise screening criteria using AI.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Analytics</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Get instant updates and analysis based on your custom criteria.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Alerts</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Receive notifications when stocks match your criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Pricing Section - Update the Get Started buttons */}
      <div className="py-12" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Choose the perfect plan for your investment needs
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <PricingTier
                key={index}
                title={tier.title}
                price={tier.price}
                features={tier.features}
                isPopular={tier.isPopular}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;