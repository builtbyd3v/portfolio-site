import assert from 'node:assert/strict'
import { test } from 'node:test'
import { parseGithubCalendar } from './github-contributions.js'

const SAMPLE = `
  <h2>1,352 contributions in the last year</h2>
  <td tabindex="0" data-date="2026-09-18" id="contribution-day-component-5-37" data-level="4"></td>
  <tool-tip for="contribution-day-component-5-37">86 contributions on September 18th.</tool-tip>
  <td tabindex="0" data-date="2026-09-20" id="contribution-day-component-0-38" data-level="0"></td>
  <tool-tip for="contribution-day-component-0-38">No contributions on September 20th.</tool-tip>
  <td tabindex="0" data-date="2025-12-31" id="contribution-day-component-3-0" data-level="1"></td>
  <tool-tip for="contribution-day-component-3-0">2 contributions on December 31st.</tool-tip>
`

test('parseGithubCalendar reads the rolling-year total and tooltip counts', () => {
  const parsed = parseGithubCalendar(SAMPLE)
  assert.equal(parsed.total, 1352)
  assert.deepEqual(
    parsed.contributions.map((day) => day.date),
    ['2025-12-31', '2026-09-18', '2026-09-20'],
  )
  assert.deepEqual(parsed.contributions[1], {
    date: '2026-09-18',
    count: 86,
    level: 4,
  })
  assert.deepEqual(parsed.contributions[2], {
    date: '2026-09-20',
    count: 0,
    level: 0,
  })
})
