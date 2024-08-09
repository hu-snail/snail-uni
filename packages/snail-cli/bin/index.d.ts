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
}
declare function create(): Promise<void>;
declare function scaffold({ title, description, uiType, useTs }: ScaffoldOptions): string;

export { ScaffoldOptions, ScaffoldUIType, create, scaffold };
