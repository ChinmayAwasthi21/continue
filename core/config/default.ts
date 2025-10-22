import { ConfigYaml } from "@continuedev/config-yaml";
import { setupUnicoderConfig } from "./onboarding.js";

export const defaultContextProvidersVsCode: NonNullable<
  ConfigYaml["context"]
>[number][] = [
  { provider: "code" },
  { provider: "docs" },
  { provider: "diff" },
  { provider: "terminal" },
  { provider: "problems" },
  { provider: "folder" },
  { provider: "codebase" },
];

export const defaultContextProvidersJetBrains: NonNullable<
  ConfigYaml["context"]
>[number][] = [
  { provider: "diff" },
  { provider: "folder" },
  { provider: "codebase" },
];

// Unicoder default configuration with A4F.co preconfigured
const unicoderBaseConfig: ConfigYaml = {
  name: "Unicoder Assistant",
  version: "1.0.0",
  schema: "v1",
  models: [],
  context: defaultContextProvidersVsCode,
};

export const defaultConfig: ConfigYaml = setupUnicoderConfig(unicoderBaseConfig);

export const defaultConfigJetBrains: ConfigYaml = {
  name: "Unicoder Assistant",
  version: "1.0.0",
  schema: "v1",
  models: [],
  context: defaultContextProvidersJetBrains,
};
