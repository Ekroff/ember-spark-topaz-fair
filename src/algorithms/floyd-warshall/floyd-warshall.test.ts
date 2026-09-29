import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { floydWarshall, runFloydWarshall } from "./compute.ts";
import {
  EXAMPLE_GRAPH,
  EXPECTED_FINAL_MATRIX,
  EXPECTED_INITIAL_MATRIX,
} from "./example.ts";
import { addDistances, buildInitialMatrix, cloneMatrix } from "../../game/matrix.ts";
import { cloneWeightedGraph } from "../../game/graph.ts";
import { INF } from "../../types/matrix.ts";
import type { WeightedGraph } from "../../types/challenge.ts";

function graphWith(overrides: Partial<WeightedGraph> & Pick<WeightedGraph, "nodes" | "edges">): WeightedGraph {
  return {
    directed: true,
    ...overrides,
  };
}

describe("Floyd–Warshall example graph", () => {
  it("builds the initial matrix and the expected shortest-path matrix", () => {
    const { initial, final } = runFloydWarshall(EXAMPLE_GRAPH);
    assert.deepEqual(initial, EXPECTED_INITIAL_MATRIX);
    assert.deepEqual(final, EXPECTED_FINAL_MATRIX);
  });

  it("prefers a shorter indirect path over a direct edge", () => {
    const { final } = runFloydWarshall(EXAMPLE_GRAPH);
    assert.equal(EXPECTED_INITIAL_MATRIX[0][3], 10);
    assert.equal(final[0][3], 9);
    assert.ok(final[0][3] < 10);
  });

  it("leaves unreachable vertices as Infinity", () => {
    const { final } = runFloydWarshall(EXAMPLE_GRAPH);
    assert.equal(final[1][0], INF);
    assert.equal(final[2][0], INF);
    assert.equal(final[2][1], INF);
    assert.equal(final[3][0], INF);
    assert.equal(final[3][1], INF);
    assert.equal(final[3][2], INF);
  });

  it("keeps self-distance at 0", () => {
    const { initial, final } = runFloydWarshall(EXAMPLE_GRAPH);
    for (let i = 0; i < 4; i += 1) {
      assert.equal(initial[i][i], 0);
      assert.equal(final[i][i], 0);
    }
  });

  it("uses multiple intermediate vertices (0 → 1 → 2 → 3)", () => {
    const { final } = runFloydWarshall(EXAMPLE_GRAPH);
    assert.equal(final[0][2], 8);
    assert.equal(final[0][3], 9);
    assert.equal(final[1][3], 4);
  });
});

describe("Floyd–Warshall engine contracts", () => {
  it("does not mutate the original graph", () => {
    const snapshot = cloneWeightedGraph(EXAMPLE_GRAPH);
    runFloydWarshall(EXAMPLE_GRAPH);
    assert.deepEqual(EXAMPLE_GRAPH, snapshot);
  });

  it("does not mutate the input distance matrix", () => {
    const initial = buildInitialMatrix(EXAMPLE_GRAPH);
    const before = cloneMatrix(initial);
    floydWarshall(initial);
    assert.deepEqual(initial, before);
  });

  it("never turns Infinity addition into a finite value", () => {
    assert.equal(addDistances(INF, 4), INF);
    assert.equal(addDistances(4, INF), INF);
    assert.equal(addDistances(INF, INF), INF);
    assert.equal(addDistances(Number.NaN, 2), INF);
    assert.equal(addDistances(2, 3), 5);
  });

  it("rejects graphs outside 3–10 vertices", () => {
    const tooSmall = graphWith({
      nodes: [
        { id: "0", label: "0" },
        { id: "1", label: "1" },
      ],
      edges: [{ from: "0", to: "1", weight: 1 }],
    });
    assert.throws(() => buildInitialMatrix(tooSmall), /3–10 vertices/);
  });

  it("rejects non-positive weights", () => {
    const invalid = cloneWeightedGraph(EXAMPLE_GRAPH);
    invalid.edges[0].weight = 0;
    assert.throws(() => buildInitialMatrix(invalid), /positive integer weight/);
  });
});
