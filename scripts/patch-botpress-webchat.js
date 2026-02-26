const fs = require("fs")
const path = require("path")

const target = path.join(
  process.cwd(),
  "node_modules",
  "@botpress",
  "webchat",
  "dist",
  "index.js"
)

if (!fs.existsSync(target)) {
  process.exit(0)
}

const source = fs.readFileSync(target, "utf8")
let patched = source
let changed = false

if (!patched.includes("conversationId: o,\n  connected: _,\n  ...s")) {
  const withConnectedFix = patched.replace(
    "conversationId: o,\n  ...s\n}) => {",
    "conversationId: o,\n  connected: _,\n  ...s\n}) => {"
  )
  if (withConnectedFix !== patched) {
    patched = withConnectedFix
    changed = true
  } else {
    console.warn("[patch-botpress-webchat] connected patch pattern not found.")
  }
}

if (!patched.includes("isReadOnly: s, messageId: _, ...a }) => {")) {
  const withMessageIdFix = patched.replace(
    "isReadOnly: s, ...a }) => {",
    "isReadOnly: s, messageId: _, ...a }) => {"
  )
  if (withMessageIdFix !== patched) {
    patched = withMessageIdFix
    changed = true
  } else {
    console.warn("[patch-botpress-webchat] messageId patch pattern not found.")
  }
}

if (!changed) {
  process.exit(0)
}

fs.writeFileSync(target, patched, "utf8")
console.log("[patch-botpress-webchat] Applied Botpress DOM-prop fixes.")
