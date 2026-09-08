import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

// The landing page fetches supply stats, the current raffle and the latest
// Medium articles on mount. Stub fetch so the suite stays offline and
// deterministic — every one of those services falls back gracefully when the
// request fails, so a rejecting fetch also exercises the degraded rendering
// path the site shows when the aggregator API is down.
const fetchMock = jest.fn(() => Promise.reject(new Error("network disabled in tests")))
const originalFetch = global.fetch

beforeEach(() => {
  fetchMock.mockClear()
  global.fetch = fetchMock as unknown as typeof fetch
})

afterEach(() => {
  global.fetch = originalFetch
})

test("renders the landing page with all its sections", async () => {
  render(<App />)

  expect(await screen.findByRole("heading", { name: "BeeZee Network" })).toBeInTheDocument()

  const sections = [
    "Network details",
    "Features",
    "Roadmap",
    "Explore Our Ecosystem",
    "Earn Crypto",
    "Wallets",
    "News",
    "Partners",
  ]
  for (const section of sections) {
    expect(screen.getByRole("heading", { name: section })).toBeInTheDocument()
  }
})

// Guards the ecosystem section against a card or quick link silently losing its
// destination — the whole point of that section is sending visitors elsewhere.
test("every card in the ecosystem section links to an absolute URL", async () => {
  render(<App />)

  await screen.findByRole("heading", { name: "BeeZee Applications" })

  const links = screen.getAllByRole("link").filter((link) => link.closest("#ecosystem") !== null)

  expect(links.length).toBeGreaterThan(0)
  for (const link of links) {
    expect(link).toHaveAttribute("href", expect.stringMatching(/^https:\/\//))
  }
})
