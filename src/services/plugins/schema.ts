import { PluginSchema } from "../../types/pluginSchema";
import { apiRequest } from "../api/base";

/**
 * Fetches the schema for a specific plugin
 */

const schemaCache: Record<string, { schema: PluginSchema; timestamp: number }> =
  {};

export const getPluginSchema = async (
  pluginId: number
): Promise<PluginSchema> => {
  // Check cache first (with 5-minute expiry)
  const cached = schemaCache[pluginId];
  if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) {
    return cached.schema;
  }

  try {
    const schema = await apiRequest<PluginSchema>(
      `/Plugin/${pluginId}/schema1`
    );
    schemaCache[pluginId] = { schema, timestamp: Date.now() };
    return schema;
  } catch (error) {
    console.error(`Error fetching plugin schema with ID ${pluginId}:`, error);
    throw error;
  }
};
