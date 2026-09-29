import type { AlgorithmModule } from "../../types/algorithm.ts";

export { floydWarshall, runFloydWarshall } from "./compute.ts";
export { buildInitialMatrix } from "../../game/matrix.ts";
export {
  EXAMPLE_GRAPH,
  EXPECTED_FINAL_MATRIX,
  EXPECTED_INITIAL_MATRIX,
} from "./example.ts";

export const floydWarshallModule: AlgorithmModule = {
  id: "floyd-warshall",
};
