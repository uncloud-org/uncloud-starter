import { describe, test, expect } from '@jest/globals'
import { service, res } from '@uncloud-sdk/testutils'
import { hello } from './hello'

describe('hello', () => {
  test('Expect to return failure if name is missing', async () => {
    const response = await service.run(hello, {}, { log: () => {} })
    expect(response).toStrictEqual(res.failure('"name" is required'))
  })

  test('Expect to return success with greeting when name provided', async () => {
    const response = await service.run(hello, { name: 'test' }, { log: () => {} })
    expect(response).toStrictEqual(res.success('Hello test - nice meeting ya 🥳'))
  })
  
  test('Logs upon receiving request', async () => {
    const log = jest.fn()
    await service.run(hello, { name: 'test' }, { log })
    expect(log).toHaveBeenCalledWith('Received request to greet "test"')
  })
})