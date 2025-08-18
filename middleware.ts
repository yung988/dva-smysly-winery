import { NextResponse, NextRequest } from "next/server"

// Very small bot/Lighthouse UA detection to bypass age gate for crawlers and audits
const BOT_PATTERNS = [
  /Googlebot/i,
  /Lighthouse/i,
  /PageSpeed/i,
  /Chrome-Lighthouse/i,
  /GTmetrix/i,
  /Pingdom/i,
  /Bingbot/i,
  /DuckDuckBot/i,
  /Twitterbot/i,
  /facebookexternalhit/i,
  /Slackbot-LinkExpanding/i,
]

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || ""
  const isBot = BOT_PATTERNS.some((re) => re.test(ua))

  const response = NextResponse.next()

  if (isBot) {
    // Set a short-lived cookie to mark verification for bots
    response.cookies.set("ageVerified", "true", {
      path: "/",
      maxAge: 60 * 60, // 1 hour
    })
  }

  return response
}

export const config = {
  // Run on all pages
  matcher: ["/:path*"],
}
