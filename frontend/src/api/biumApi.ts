export type BiumFileMetadata = {
  name: string;
  sizeBytes: number;
  lastModified: string;
  type: string;
  relativePath: string;
  extension: string;
};

export type BiumAnalyzeResponse = {
  summary: {
    totalFiles: number;
    cleanableFiles: number;
    estimatedSavedMb: number;
    estimatedCo2Gram: number;
    earnedPoint: number;
  };
  candidates: Array<{
    name: string;
    relativePath: string;
    category: string;
    riskLevel: string;
    recommendation: string;
    reason: string;
    savedMb: number;
    co2Gram: number;
    point: number;
  }>;
};

const API_PATHS = [
  "https://saessak.onrender.com/api/bium/files/analyze",
  "/api/bium/files/analyze",
  "http://localhost:8080/api/bium/files/analyze",
];

export async function analyzeBiumFiles(files: BiumFileMetadata[]): Promise<BiumAnalyzeResponse> {
  let lastError: unknown = null;

  for (const endpoint of API_PATHS) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ files }),
      });

      if (!response.ok) {
        throw new Error(`Analyze API failed: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Analyze API request failed");
}
