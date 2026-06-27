import { describe, expect, it, vi } from "vitest";
import { RefreshCoordinator } from "./RefreshCoordinator";

describe("RefreshCoordinator", () => {
  it("reuses one in-flight refresh for concurrent callers", async () => {
    const coordinator = new RefreshCoordinator();
    let finishRefresh!: () => void;
    const task = vi.fn(() => new Promise<void>((resolve) => {
      finishRefresh = resolve;
    }));

    const first = coordinator.run(task);
    const second = coordinator.run(task);
    const third = coordinator.run(task);

    expect(task).toHaveBeenCalledTimes(1);

    finishRefresh();
    await Promise.all([first, second, third]);
  });
});
