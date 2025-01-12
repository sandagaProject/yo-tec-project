import type { StorybookConfig } from "@storybook/nextjs"; // Storybookの型定義をインポート

const config: StorybookConfig = {
  // ストーリーのパスを指定
  stories: [
    "../stories/**/*.mdx", // MDX形式のストーリー
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)", // 各種JavaScript/TypeScript形式のストーリー
  ],
  // 使用するアドオンを指定
  addons: [
    "@storybook/addon-onboarding", // オンボーディング用アドオン
    "@storybook/addon-essentials", // 基本的なアドオンセット
    "@chromatic-com/storybook", // Chromatic用アドオン
    "@storybook/addon-interactions", // インタラクション用アドオン
  ],
  // 使用するフレームワークを指定
  framework: {
    name: "@storybook/nextjs", // Next.js用のStorybookフレームワーク
    options: {},
  },
  // 静的ファイルのディレクトリを指定
  staticDirs: ["../public"],
};
export default config; // 設定をエクスポート
