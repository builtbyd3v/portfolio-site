import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  forYear,
  parseGithubCalendar,
  requestedYear,
} from './github-contributions.js'

const SAMPLE = `
  <h2>931 contributions in 2026</h2>
  <td tabindex="0" data-date="2026-09-18" id="contribution-day-component-5-37" data-level="4"></td>
  <tool-tip for="contribution-day-component-5-37">86 contributions on September 18th.</tool-tip>
  <td tabindex="0" data-date="2026-09-20" id="contribution-day-component-0-38" data-level="0"></td>
  <tool-tip for="contribution-day-component-0-38">No contributions on September 20th.</tool-tip>
  <td tabindex="0" data-date="2025-12-31" id="contribution-day-component-3-0" data-level="1"></td>
  <tool-tip for="contribution-day-component-3-0">2 contributions on December 31st.</tool-tip>
`

test('requestedYear falls back to this year when the query is junk', () => {
  assert.equal(requestedYear('2026'), 2026)
  assert.equal(requestedYear('nope'), new Date().getFullYear())
  assert.equal(requestedYear('2015'), 2015)
  assert.equal(requestedYear('1800'), new Date().getFullYear())
})

test('parseGithubCalendar reads counts from tooltips', () => {
  const parsed = parseGithubCalendar(SAMPLE)
  assert.equal(parsed.total[2026], 931)
  assert.equal(parsed.contributions.length, 3)
  assert.deepEqual(
    parsed.contributions.find((day) => day.date === '2026-09-18'),
    { date: '2026-09-18', count: 86, level: 4 },
  )
  assert.deepEqual(
    parsed.contributions.find((day) => day.date === '2026-09-20'),
    { date: '2026-09-20', count: 0, level: 0 },
  )
})

test('forYear keeps only the requested calendar year', () => {
  const scoped = forYear(parseGithubCalendar(SAMPLE), 2026)
  assert.equal(scoped.contributions.length, 2)
  assert.equal(scoped.total[2026], 931)
  assert.ok(scoped.contributions.every((day) => day.date.startsWith('2026-')))
})
