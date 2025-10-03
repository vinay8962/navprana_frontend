"use client";

import { useState } from "react";
import Link from "next/link";

import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const page = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          {/* Tabs */}
          <div className="grid grid-cols-2 border border-gray-400 rounded-lg overflow-hidden mb-8">
            <button
              onClick={() => setActiveTab("signin")}
              className={`py-2 font-medium transition ${
                activeTab === "signin"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`py-2 font-medium transition ${
                activeTab === "signup"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Sign In */}
          {activeTab === "signin" && (
            <div className="border border-gray-400 rounded-xl shadow-sm bg-card p-6">
              <h2 className="text-2xl font-bold text-center mb-1">
                Welcome Back
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                Sign in to your account to continue
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label
                    htmlFor="signin-email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="signin-email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-lg bg-background focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="signin-password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2 border border-gray-400 rounded-lg bg-background focus:ring-2 focus:ring-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot password */}
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Button */}
                <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium">
                  Sign In
                </button>
              </div>
            </div>
          )}

          {/* Sign Up */}
          {activeTab === "signup" && (
            <div className="border rounded-xl shadow-sm bg-card p-6">
              <h2 className="text-2xl font-bold text-center mb-1">
                Create Account
              </h2>
              <p className="text-center text-muted-foreground mb-6">
                Join us to start your wellness journey
              </p>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="signup-name"
                    className="block text-sm font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-lg bg-background focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="signup-email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-lg bg-background focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="signup-password"
                    className="block text-sm font-medium mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2 border border-gray-400 rounded-lg bg-background focus:ring-2 focus:ring-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="signup-confirm-password"
                    className="block text-sm font-medium mb-1"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="signup-confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2 border border-gray-400 rounded-lg bg-background focus:ring-2 focus:ring-primary"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium">
                  Create Account
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-primary hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
