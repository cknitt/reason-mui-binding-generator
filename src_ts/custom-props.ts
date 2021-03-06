export default {
    Input: {
        inputComponent: {
            type: {
                name: 'any',
            },
            required: false,
            description: '-',
        },
    },
    MenuItem: {
        value: {
            type: {
                name: 'union',
                value: [
                    {
                        name: 'string'
                    },
                    {
                        name: 'number'
                    },
                    {
                        name: 'arrayOf',
                        value: {
                            name: 'string',
                        },
                    },
                ],
            },
            required: false,
            description: '-',
        },
        onFocus: {
            type: {
                name: 'func',
            },
            required: false,
            description: '-',
        },
        onClick: {
            type: {
                name: 'func',
            },
            required: false,
            description: '-',
        },
    },
    ListItem: {
        value: {
            type: {
                name: 'union',
                value: [
                    {
                        name: 'string'
                    },
                    {
                        name: 'number'
                    },
                    {
                        name: 'arrayOf',
                        value: {
                            name: 'string',
                        },
                    },
                ],
            },
            required: false,
            description: '-',
        },
        onFocus: {
            type: {
                name: 'func',
            },
            required: false,
            description: '-',
        },
        onClick: {
            type: {
                name: 'func',
            },
            required: false,
            description: '-',
        },
    },
    Menu: {
        anchorEl: {
            type: {
                name: 'any'
            },
            required: false,
            description: '-',
        },
    },
    Tabs: {
        onChange: {
            type: {
                name: 'custom',
                type: '(ReactEventRe.Mouse.t, int) => unit',
            },
            required: false,
            description: '',
        },
    },
    Checkbox: {
        onChange: {
            type: {
                name: 'custom',
                type: '(ReactEventRe.Mouse.t, bool) => unit',
            },
            required: false,
            description: '',
        },
    },
};