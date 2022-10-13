/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    tutorialSidebar: [
        {type: 'doc', id: 'index', label: 'Introduction'},
        'quickstart',
        'usage',
        {
            type: 'category',
            label: 'Benchmark',
            collapsed: false,
            link: {
                type: 'doc',
                id: 'benchmark/index',
            },
            items: [
                'benchmark/gather-data',
                {
                    type: 'category',
                    label: 'Analyze',
                    collapsed: false,
                    link: {
                        type: 'doc',
                        id: 'benchmark/analyze/index',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'FPS',
                            collapsed: false,
                            link: {
                                type: 'doc',
                                id: 'benchmark/analyze/fps/index',
                            },
                            items: [
                                'benchmark/analyze/fps/video',
                                'benchmark/analyze/fps/tracing',
                                'benchmark/analyze/fps/pitfalls',
                            ],
                        },
                        'benchmark/analyze/linearity',
                        'benchmark/analyze/jank',
                        'benchmark/analyze/latency',
                        'benchmark/analyze/waste',
                    ],
                },
                'benchmark/devtool',
            ],
        },
        'design',
        'debug',
        {
            type: 'category',
            label: 'Discussion',
            collapsed: false,
            link: {
                type: 'doc',
                id: 'discussion/index',
            },
            items: [
                'discussion/design-doc',
                'discussion/conversation',
            ],
        },
    ],
};

module.exports = sidebars;
