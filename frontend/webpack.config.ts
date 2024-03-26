import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
// 为了获得 dev server 的类型提示，webpack-dev-server包里有对 configuration 的类型增强
import "webpack-dev-server";

const config: Configuration = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: { sourceMaps: true },
          },
        ],

        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
  devServer: {
    port: 3001,
    open: true,
    hot: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3002",
        pathRewrite: { "^/api": "" },
      },
    ],
  },
  devtool: "source-map",
};

export default config;
