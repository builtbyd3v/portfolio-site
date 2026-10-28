import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  bestDay,
  localIso,
  longestStreak,
  monthLabels,
  weeksFromDays,
} from './github-contributions.ts'

const days = (counts) =>
  counts.map((count, i) => ({
    date: `2026-01-${String(i + 1).padStart(2, '0')}`,
    count,
    level: count ? 1 : 0,
  }))

test('longestStreak counts the longest run of active days', () => {
  assert.equal(longestStreak(days([1, 2, 0, 3, 4, 5, 0, 1])), 3)
  assert.equal(longestStreak(days([0, 0, 0])), 0)
  assert.equal(longestStreak(days([2, 2, 2, 2])), 4)
})

test('bestDay returns the busiest day, earliest on ties', () => {
  assert.deepEqual(bestDay(days([1, 7, 3, 7])), {
    date: '2026-01-02',
    count: 7,
    level: 1,
  })
  assert.equal(bestDay(days([0, 0])), null)
})

test('monthLabels drops a first label that would overlap the next one', () => {
  const start = new Date('2025-10-28T00:00:00')
  const span = Array.from({ length: 70 }, (_, i) => {
    const d = new Date(start)
    d.setDate(d.getDate() + i)
    return { date: localIso(d), count: 0, level: 0 }
  })
  const labels = monthLabels(weeksFromDays(span)).map((l) => l.label)
  assert.deepEqual(labels, ['Nov', 'Dec', 'Jan'])
})
