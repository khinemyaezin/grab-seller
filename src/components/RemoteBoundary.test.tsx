import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { RemoteBoundary } from "./RemoteBoundary";

describe("RemoteBoundary", () => {
  it("keeps the shell usable when a remote cannot load", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    render(<RemoteBoundary label="Products" loader={() => Promise.reject(new Error("offline")) as any} />);
    expect(await screen.findByText("Module unavailable")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument();
  });
});

