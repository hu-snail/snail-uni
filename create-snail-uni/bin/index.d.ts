#!/usr/bin/env node
declare enum ScaffoldUIType {
  Default = 'Wot-Design',
  UvUi = 'Uv-ui',
  UviewPlus = 'Uview-plus',
  TuniaoUI = 'TuniaoUI',
}
interface ScaffoldOptions {
  title?: string;
  description?: string;
  uiType?: ScaffoldUIType;
  useTs?: boolean;
  useTabbar?: boolean;
  useEslint?: boolean;
}
declare function create(): Promise<void>;
declare function scaffold({ title, description, uiType, useTs, useTabbar, useEslint }: ScaffoldOptions): string;
declare function moveFiles(templateDir: string, resolvedRoot: string, filePath: string): void;
declare const createTemp: (
  title?: string,
  useTs?: string,
  tabbar?: string,
  eslint?: string,
  ui?: ScaffoldUIType,
) => void;

export { ScaffoldOptions, ScaffoldUIType, create, createTemp, moveFiles, scaffold };
