// Invent a Word We Need — entry program (make.fun, program/v1).
//
// Writes ONE line to /output/entry.txt: one invented English word plus
// its definition in a single clear line, at most 140 characters total.
// No network, no secrets, no input files: the entry is a constant.
//
// The word: Laughlag — a fake laugh that lands a beat late on a joke you missed.
// Why this one: everyone has faked a laugh a beat too late at a joke they
// didn't get — in a meeting, at a party, in a group chat — and English has
// no word for it. "Pity laugh" is on time; the lag is the whole moment.
// Laughlag is sayable (LAFF-lag), spellable, memorable, and follows the
// jetlag pattern: a lag named after what lags.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole entry: word + definition, one line, no trailing newline.
const ENTRY = "Laughlag \u2014 a fake laugh that lands a beat late on a joke you missed.";

// Output dir: the grader sets MAKEFUN_OUTPUT_DIR; otherwise /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate self-check (code points, not bytes): entry must be 1-140 chars.
// Counted here: 68. If this ever failed, failing loudly beats shipping
// an entry the gate would refuse.
const length = [...ENTRY].length;
if (length < 1 || length > 140) {
  console.error(`entry is ${length} characters, outside the 1-140 gate`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
