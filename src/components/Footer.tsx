"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    SparklesIcon,
    EnvelopeIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";

const footerLinks = {
    product: [
        { name: "Features", href: "#features" },
        { name: "Voice Enhancement", href: "#voice" },
        { name: "Emotion Detection", href: "#emotion" },
        { name: "Lyrics Generator", href: "#lyrics" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ],
    resources: [
        { name: "Documentation", href: "/docs" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Case Studies", href: "/cases" },
        { name: "FAQs", href: "/faqs" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

const socialLinks = [
    {
        name: "Twitter",
        href: "https://twitter.com/awaazai",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/awaazai",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <SparklesIcon className="w-8 h-8 text-blue-500" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                                Awaaz AI
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">
                            Transforming Nepali vocal performances with
                            AI-powered enhancement and creative tools.
                        </p>
                        {/* Newsletter Signup */}
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold text-white mb-3">
                                Subscribe to our newsletter
                            </h3>
                            <form className="flex gap-2">
                                <div className="relative flex-grow">
                                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 md:col-span-3 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4">
                                Product
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.product.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-4">
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <GlobeAltIcon className="w-5 h-5 text-gray-400" />
                            <select className="bg-transparent text-sm text-gray-400 focus:outline-none focus:text-blue-400">
                                <option value="en">English</option>
                                <option value="ne">नेपाली</option>
                            </select>
                        </div>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-xs text-gray-400">
                            © {new Date().getFullYear()} Awaaz AI. All rights
                            reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
