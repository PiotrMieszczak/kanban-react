#!/usr/bin/env node

// 1) Load the Tailwind config you want to test
const userConfig = require('../libs/ui/tailwind.config.cjs');

// 2) Import Tailwind’s resolver
const resolveConfig = require('tailwindcss/resolveConfig');

// 3) Resolve the full config
const fullConfig = resolveConfig(userConfig);

// 4) Print it
console.log(JSON.stringify(fullConfig, null, 2));
