import { ReactNode } from "react";

export interface Plugin {
  id: number;
  name: string;
  category: number;
  description?: string;
  icon?: ReactNode;
  isPremium: boolean;
}

export interface PluginCategory {
  id: number;
  name: string;
  plugins: Plugin[];
}
