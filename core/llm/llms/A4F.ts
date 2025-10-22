import { LLMOptions } from "../../index.js";
import OpenAI from "./OpenAI.js";

/**
 * A4F.co provider - OpenAI-compatible API with access to hundreds of models
 * Docs: https://www.a4f.co/docs
 */
class A4F extends OpenAI {
  static providerName = "a4f";
  
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://api.a4f.co/v1/",
    maxEmbeddingBatchSize: 128,
  };

  constructor(options: LLMOptions) {
    super(options);
    
    // Override apiBase if not set
    if (!this.apiBase || this.apiBase === "https://api.openai.com/v1/") {
      this.apiBase = "https://api.a4f.co/v1/";
    }
  }

  protected _convertModelName(model: string): string {
    // A4F uses provider-prefixed model names like "provider-1/chatgpt-4o-latest"
    // Keep the model name as-is since users will configure with full model IDs
    return model;
  }

  protected _getHeaders() {
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.apiKey}`,
    };
  }
}

export default A4F;
