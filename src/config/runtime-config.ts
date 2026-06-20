import { defaultRuntimeConfig, type SellerRuntimeConfig } from "@grab/seller-contracts";

type RuntimeConfigInput = Partial<Omit<SellerRuntimeConfig, "remotes">> & {
  remotes?: Partial<SellerRuntimeConfig["remotes"]>;
};

function safeApiBaseUrl(value: unknown): string {
  if (typeof value === "string" && value.startsWith("/") && !value.startsWith("//")) {
    return value.replace(/\/$/, "");
  }
  return defaultRuntimeConfig.apiBaseUrl;
}

function createRuntimeConfig(input: RuntimeConfigInput): Readonly<SellerRuntimeConfig> {
  const remotes = Object.freeze({
    productManifest: input.remotes?.productManifest ?? defaultRuntimeConfig.remotes.productManifest,
    inventoryManifest: input.remotes?.inventoryManifest ?? defaultRuntimeConfig.remotes.inventoryManifest,
  });

  return Object.freeze({
    appName: input.appName ?? defaultRuntimeConfig.appName,
    apiBaseUrl: safeApiBaseUrl(input.apiBaseUrl),
    remotes
  });
}

export async function loadRuntimeConfig(): Promise<Readonly<SellerRuntimeConfig>> {
  try {
    const response = await fetch("/runtime-config.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Runtime config request failed with ${response.status}`);
    }
    return createRuntimeConfig(await response.json() as RuntimeConfigInput);
  } catch (error) {
    console.warn("Using default runtime configuration", error);
    return createRuntimeConfig({});
  }
}
