#!/usr/bin/env node
declare enum ScaffoldUIType {
    Default = "Wot-Design",
    Sard = "Sard-ui",
    UViewPro = "Uview-Pro",
    UvUi = "Uv-ui",
    UviewPlus = "Uview-plus",
    TuniaoUI = "TuniaoUI",
    NutuUI = "NutUI",
    UniUI = "UniUI"
}
declare enum ScaffoldRequestType {
    Axios = "axios",
    Alova = "alova"
}
interface ScaffoldOptions {
    title?: string;
    description?: string;
    uiType?: ScaffoldUIType;
    requestType?: ScaffoldRequestType;
    useTs?: boolean;
    useTabbar?: boolean;
    useEslint?: boolean;
}
declare function create(): Promise<void>;
declare function scaffold({ title, description, uiType, requestType, useTs, useTabbar, useEslint, }: ScaffoldOptions): string;
declare function moveFiles(templateDir: string, resolvedRoot: string, filePath: string): void;
declare const createTemp: (title?: string, useTs?: string, tabbar?: string, eslint?: string, ui?: ScaffoldUIType) => void;

export { ScaffoldOptions, ScaffoldRequestType, ScaffoldUIType, create, createTemp, moveFiles, scaffold };
