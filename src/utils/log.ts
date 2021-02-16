import consoleLogLevel from 'console-log-level'

const prefix = (level: string) => `${new Date().toISOString()} (${level})`

export const log = consoleLogLevel({ prefix, level: 'info' })
