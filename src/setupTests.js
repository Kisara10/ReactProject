const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

require("@testing-library/jest-dom");

// ✅ Mock Vite's import.meta.env for Jest
Object.defineProperty(globalThis, "import", {
    value: {
        meta: {
            env: {
                BASE_URL: "/",
            },
        },
    },
});
