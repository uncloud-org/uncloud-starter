import { service, res } from '@uncloud-sdk/lib'

export const hello = service('hello', ({ props, deps }) => {
  const { name } = props
  const { log } = deps
  if (!name) {
    return res.failure('"name" is required')
  }
  
  log(`Received request to greet "${name}"`)
  return res.success(`Hello ${name} - nice meeting ya 🥳`)
}, {
  log: console.log,
})