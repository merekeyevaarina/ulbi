import type webpack from "webpack";
import type { RuleSetRule } from "webpack";
import type { BuildPath } from "../build/types/config";

const path = require("path");
const { buildCssLoaders } = require("../build/loaders/buildCssLoaders");

module.exports = ({ config }: { config: webpack.Configuration }) => {
    const paths:BuildPath = {

        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');


    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(String(rule.test))) {
            return { ...rule, exclude: /\.svg/i };
        }
        return rule;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use:['@svgr/webpack'],
    })
    config.module.rules.push(buildCssLoaders(true));

    return config;
};