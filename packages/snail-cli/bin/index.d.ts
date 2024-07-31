#!/usr/bin/env node
declare enum ScaffoldUIType {
  Default = 'Wot Design Ui',
  UvUi = 'Uv-ui',
  UviewPlus = 'Uview-plus',
  TuniaoUI = 'TuniaoUI',
}
interface ScaffoldOptions {
  root: string;
  title?: string;
  description?: string;
  uiType?: ScaffoldUIType;
  useTs?: boolean;
}
declare function init(root: string | undefined): Promise<void>;
declare function scaffold({ root, title, description, uiType, useTs }: ScaffoldOptions): string;

export { ScaffoldOptions, ScaffoldUIType, init, scaffold };
