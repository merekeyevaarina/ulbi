export function buildCssLoaders(isDev: boolean) {
 return {
     test: /\.s[ac]ss$/i,
     use: [
         "style-loader",
         {
             loader: "css-loader",
             options: {
                 modules: {
                     auto: (resPath: string) => resPath.endsWith('.module.scss'),
                     namedExport: false,
                     localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                 },
             },
         },
         "sass-loader",
     ],
 };
}