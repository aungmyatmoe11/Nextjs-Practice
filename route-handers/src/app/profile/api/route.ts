import { NextRequest } from "next/server"
import { cookies, headers } from "next/headers"

export async function GET(request: NextRequest) {
  const requestHandlers = new Headers(request.headers)
  const headerList = headers()

  console.log(requestHandlers.get("Authorization"))
  console.log(headerList.get("Authorization"))

  // ! Cookie
  const theme = request.cookies.get("theme")
  cookies().set("resultsPerPage", "20")

  console.log(theme)
  console.log(cookies().get("resultsPerPage"))

  return new Response("<h1>Profile API DATA</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  })
}
