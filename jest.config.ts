export default {
    testEnvironment: 'node',
    preset: 'ts-jest/presets/default-esm',
    testMatch: ['**/src/**/*.spec.ts'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            useESM: true,
        }],
    },
    coverageThreshold: {
        global: {
            statements: 50,
            functions: 50,
        },
    },
    forceExit: true,
    detectOpenHandles: true,
    verbose: true,
    maxWorkers: 1,
};
