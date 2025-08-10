<template>
  <div :class="['w-full', props.heightClass, 'rounded-2xl', 'bg-slate-900/60', 'border', 'border-slate-700', 'relative', 'overflow-hidden']">
    <svg ref="svgEl" viewBox="0 0 600 300" class="w-full h-full" @click="onSvgClick">
      <!-- Connections: input -> hidden -->
      <g v-if="mode !== 'perceptron'" v-for="(iPos, iIdx) in inputPositions" :key="`i-${iIdx}`">
        <g v-for="(hPos, hIdx) in hiddenPositions" :key="`i-${iIdx}-h-${hIdx}`">
          <line :x1="iPos.x" :y1="iPos.y" :x2="hPos.x" :y2="hPos.y"
                :stroke="mode === 'visualize' ? '#334155' : (weightsIH[iIdx][hIdx] ? '#16a34a' : '#334155')"
                :stroke-width="mode === 'visualize' ? 2 : (weightsIH[iIdx][hIdx] ? 4 : 2)"
                :opacity="mode === 'visualize' ? 1 : 0.9"
                style="cursor: pointer"
                v-on="mode === 'game' ? { click: () => toggleIH(iIdx, hIdx) } : {}" />
        </g>
      </g>

      <!-- Connections: hidden -> output -->
      <g v-if="mode !== 'perceptron'" v-for="(hPos, hIdx) in hiddenPositions" :key="`h-${hIdx}`">
        <g v-for="(oPos, oIdx) in outputPositions" :key="`h-${hIdx}-o-${oIdx}`">
          <line :x1="hPos.x" :y1="hPos.y" :x2="oPos.x" :y2="oPos.y"
                :stroke="mode === 'visualize' ? '#334155' : (weightsHO[hIdx][oIdx] ? '#0ea5e9' : '#334155')"
                :stroke-width="mode === 'visualize' ? 2 : (weightsHO[hIdx][oIdx] ? 4 : 2)"
                :opacity="mode === 'visualize' ? 1 : 0.9"
                style="cursor: pointer"
                v-on="mode === 'game' ? { click: () => toggleHO(hIdx, oIdx) } : {}" />
        </g>
      </g>

      <!-- Nodes: Inputs -->
      <g v-if="mode !== 'perceptron'" v-for="(pos, idx) in inputPositions" :key="`input-${idx}`">
        <circle :cx="pos.x" :cy="pos.y" r="16" :fill="nodeFill('input')" stroke="#0ea5e9" stroke-width="2" />
        <text v-if="mode === 'game'" :x="pos.x - 22" :y="pos.y + 30" fill="#94a3b8" style="font: 600 10px Inter, ui-sans-serif">{{ inputs[idx].toFixed(2) }}</text>
      </g>
      <!-- Nodes: Hidden -->
      <g v-if="mode !== 'perceptron'" v-for="(pos, idx) in hiddenPositions" :key="`hidden-${idx}`">
        <circle :cx="pos.x" :cy="pos.y" r="16" :fill="nodeFill('hidden')" stroke="#22c55e" stroke-width="2" />
      </g>
      <!-- Nodes: Outputs -->
      <g v-if="mode !== 'perceptron'" v-for="(pos, idx) in outputPositions" :key="`output-${idx}`">
        <circle :cx="pos.x" :cy="pos.y" r="16" :fill="nodeFill('output')" stroke="#a855f7" stroke-width="2" />
        <text v-if="mode === 'game'" :x="pos.x - 12" :y="pos.y + 30" fill="#94a3b8" style="font: 600 10px Inter, ui-sans-serif">{{ outputs[idx].toFixed(2) }}</text>
      </g>

      <!-- Flow pulses -->
      <g v-if="mode === 'visualize'" v-for="pulse in pulses" :key="pulse.id">
        <circle :cx="pulse.x" :cy="pulse.y" r="5" :fill="pulse.color" />
      </g>

      <!-- Labels -->
      <g v-if="mode === 'visualize' && !isRunning">
        <text x="300" y="24" text-anchor="middle" fill="#cbd5e1" class="select-none" style="font: 600 14px Inter, ui-sans-serif, system-ui">Hover to simulate a forward pass</text>
      </g>

      <!-- Perceptron Sandbox: training points -->
      <g v-if="mode === 'perceptron'">
        <g v-for="(pt, idx) in points" :key="`pt-${idx}`">
          <circle :cx="normToSvgX(pt.x)" :cy="normToSvgY(pt.y)" r="6" :fill="pt.label === 1 ? '#38bdf8' : '#fb923c'" stroke="#0f172a" stroke-width="1.5" />
        </g>
        <!-- Decision boundary -->
        <line v-if="hasBoundary" :x1="boundarySvg.x1" :y1="boundarySvg.y1" :x2="boundarySvg.x2" :y2="boundarySvg.y2" stroke="#94a3b8" stroke-dasharray="6 6" stroke-width="2" />
      </g>
    </svg>

    <!-- HUD -->
    <div class="absolute top-2 left-2 text-xs text-slate-300 bg-slate-800/60 px-2 py-1 rounded" v-if="mode === 'visualize'">
      Inputs: {{ numInputs }} • Hidden: {{ numHidden }} • Outputs: {{ numOutputs }}
    </div>

    <!-- Controls -->
    <div class="absolute top-2 right-2 flex items-center gap-2">
      <button @click="switchMode('visualize')" :class="['px-2 py-1 rounded text-xs font-semibold', mode === 'visualize' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600']">Visualizer</button>
      <button @click="switchMode('game')" :class="['px-2 py-1 rounded text-xs font-semibold', mode === 'game' ? 'bg-pink-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600']">Game</button>
    </div>

    <!-- Game toolbar -->
    <div v-if="mode === 'game'" class="absolute bottom-2 left-2 right-2 flex flex-wrap items-center gap-2 bg-slate-800/60 border border-slate-700 rounded px-3 py-2 text-xs text-slate-200">
      <div class="flex items-center gap-2 mr-4">
        <span class="opacity-80">Target:</span>
        <button @click="target = 0" :class="['px-2 py-1 rounded font-semibold', target === 0 ? 'bg-sky-500 text-white' : 'bg-slate-700 hover:bg-slate-600']">Blue</button>
        <button @click="target = 1" :class="['px-2 py-1 rounded font-semibold', target === 1 ? 'bg-violet-500 text-white' : 'bg-slate-700 hover:bg-slate-600']">Purple</button>
      </div>
      <div class="flex items-center gap-2 mr-4">
        <button @click="randomizeInputs" class="px-2 py-1 rounded bg-amber-600 text-white font-semibold hover:bg-amber-500">Shuffle inputs</button>
        <button @click="resetWeights" class="px-2 py-1 rounded bg-slate-700 text-white hover:bg-slate-600">Reset weights</button>
      </div>
      <div class="flex items-center gap-3">
        <span>⏱ {{ gameTimer }}s</span>
        <span>⭐ {{ gameScore }}</span>
        <span>🏆 {{ highScore }}</span>
        <span class="opacity-80">Pred: {{ predictionLabel }}</span>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = withDefaults(defineProps<{ heightClass?: string }>(), {
  heightClass: 'h-56 md:h-64',
});

type Point = { x: number; y: number };

const numInputs = 3;
const numHidden = 4;
const numOutputs = 2;

const inputPositions = ref<Point[]>([]);
const hiddenPositions = ref<Point[]>([]);
const outputPositions = ref<Point[]>([]);

const pulses = ref<Array<{ id: number; x: number; y: number; color: string; layer: 'i-h' | 'h-o'; from: Point; to: Point; t: number }>>([]);
const isRunning = ref(false);
let tickHandle: number | null = null;
let nextId = 1;

// Modes
const mode = ref<'visualize' | 'perceptron' | 'game'>('visualize');
const svgEl = ref<SVGSVGElement | null>(null);

// Perceptron state
type LabeledPoint = { x: number; y: number; label: 1 | -1 };
const points = ref<LabeledPoint[]>([]);
const currentLabel = ref<1 | -1>(1);
const w1 = ref<number>((Math.random() - 0.5) * 2);
const w2 = ref<number>((Math.random() - 0.5) * 2);
const b = ref<number>((Math.random() - 0.5) * 2);
const lr = 0.2;
const autoTraining = ref(false);
let autoHandle: number | null = null;

const accuracy = ref(0);

// Game state (Neural Routing)
const weightsIH = ref<number[][]>(Array.from({ length: numInputs }, () => Array.from({ length: numHidden }, () => Math.random() < 0.5 ? 1 : 0)));
const weightsHO = ref<number[][]>(Array.from({ length: numHidden }, () => Array.from({ length: numOutputs }, () => Math.random() < 0.5 ? 1 : 0)));
const inputs = ref<number[]>(Array.from({ length: numInputs }, () => Math.random()));
const outputs = ref<number[]>([0, 0]);
const target = ref<number>(0);
const gameTimer = ref<number>(20);
const gameScore = ref<number>(0);
const highScore = ref<number>(0);
let gameInterval: number | null = null;

function resetWeights() {
  weightsIH.value = Array.from({ length: numInputs }, () => Array.from({ length: numHidden }, () => Math.random() < 0.5 ? 1 : 0));
  weightsHO.value = Array.from({ length: numHidden }, () => Array.from({ length: numOutputs }, () => Math.random() < 0.5 ? 1 : 0));
  computeOutputs();
}

function toggleIH(i: number, h: number) {
  if (mode.value !== 'game') return;
  weightsIH.value[i][h] = weightsIH.value[i][h] ? 0 : 1;
  computeOutputs();
}

function toggleHO(h: number, o: number) {
  if (mode.value !== 'game') return;
  weightsHO.value[h][o] = weightsHO.value[h][o] ? 0 : 1;
  computeOutputs();
}

function randomizeInputs() {
  inputs.value = inputs.value.map(() => Math.random());
  computeOutputs();
}

const predictionLabel = computed(() => outputs.value[0] >= outputs.value[1] ? 'Blue' : 'Purple');

function computeOutputs() {
  // simple feed-forward with binary weights and ReLU-like activations
  const hidden = Array.from({ length: numHidden }, (_, h) => {
    let sum = 0;
    for (let i = 0; i < numInputs; i++) {
      if (weightsIH.value[i][h]) sum += inputs.value[i];
    }
    return Math.max(0, sum / numInputs);
  });
  outputs.value = Array.from({ length: numOutputs }, (_, o) => {
    let sum = 0;
    for (let h = 0; h < numHidden; h++) {
      if (weightsHO.value[h][o]) sum += hidden[h];
    }
    return Math.max(0, sum / numHidden);
  });
}

function startGameLoop() {
  stopGameLoop();
  gameTimer.value = 20;
  gameScore.value = 0;
  randomizeInputs();
  gameInterval = window.setInterval(() => {
    gameTimer.value -= 1;
    if (gameTimer.value <= 0) {
      stopGameLoop();
      highScore.value = Math.max(highScore.value, gameScore.value);
    } else {
      // periodically change target and inputs
      if (gameTimer.value % 3 === 0) {
        target.value = target.value === 0 ? 1 : 0;
        randomizeInputs();
      }
      // scoring: +1 if prediction matches target
      const predIdx = outputs.value[0] >= outputs.value[1] ? 0 : 1;
      if (predIdx === target.value) gameScore.value += 1;
    }
  }, 1000);
}

function stopGameLoop() {
  if (gameInterval) {
    clearInterval(gameInterval);
    gameInterval = null;
  }
}

function layoutLayer(x: number, count: number): Point[] {
  const gap = 300 / (count + 1);
  return Array.from({ length: count }, (_, i) => ({ x, y: (i + 1) * gap + 30 }));
}

function initializeLayout() {
  inputPositions.value = layoutLayer(120, numInputs);
  hiddenPositions.value = layoutLayer(300, numHidden);
  outputPositions.value = layoutLayer(480, numOutputs);
}

function spawnPulsesForLayer(fromLayer: Point[], toLayer: Point[], color: string, layer: 'i-h' | 'h-o') {
  for (const from of fromLayer) {
    // choose 1-2 random targets to simulate sparsity
    const shuffled = [...toLayer].sort(() => Math.random() - 0.5).slice(0, Math.random() < 0.5 ? 1 : 2);
    for (const to of shuffled) {
      pulses.value.push({
        id: nextId++,
        x: from.x,
        y: from.y,
        color,
        layer,
        from,
        to,
        t: 0,
      });
    }
  }
}

function step(dt: number) {
  if (!isRunning.value) return;
  const speed = 0.9; // normalized per second
  for (const p of pulses.value) {
    p.t += speed * dt;
    const t = Math.min(1, p.t);
    p.x = p.from.x + (p.to.x - p.from.x) * t;
    p.y = p.from.y + (p.to.y - p.from.y) * t;
  }
  // cull finished and respawn at next layer
  const finished = pulses.value.filter(p => p.t >= 1);
  pulses.value = pulses.value.filter(p => p.t < 1);
  for (const f of finished) {
    if (f.layer === 'i-h') {
      // reached hidden, spawn onward
      spawnPulsesForLayer([f.to], outputPositions.value, '#a855f7', 'h-o');
    }
  }
  // periodically inject new inputs to keep it lively
  if (pulses.value.length < 6) {
    spawnPulsesForLayer(inputPositions.value, hiddenPositions.value, '#22c55e', 'i-h');
  }
}

let lastTs = 0;
function loop(ts: number) {
  if (!isRunning.value) return;
  const dt = lastTs ? (ts - lastTs) / 1000 : 0;
  lastTs = ts;
  step(dt);
  tickHandle = requestAnimationFrame(loop);
}

function startSimulation() {
  if (mode.value !== 'visualize' || isRunning.value) return;
  initializeLayout();
  pulses.value = [];
  isRunning.value = true;
  lastTs = 0;
  spawnPulsesForLayer(inputPositions.value, hiddenPositions.value, '#22c55e', 'i-h');
  tickHandle = requestAnimationFrame(loop);
}

function stopSimulation() {
  isRunning.value = false;
  pulses.value = [];
  if (tickHandle) {
    cancelAnimationFrame(tickHandle);
    tickHandle = null;
  }
  stopAutoTrain();
}

function nodeFill(layer: 'input' | 'hidden' | 'output') {
  switch (layer) {
    case 'input':
      return isRunning.value ? '#0c4a6e' : '#020617';
    case 'hidden':
      return isRunning.value ? '#052e1c' : '#020617';
    case 'output':
      return isRunning.value ? '#2e1065' : '#020617';
  }
}

// Perceptron helpers
function svgToNorm(clientX: number, clientY: number) {
  if (!svgEl.value) return { x: 0, y: 0 };
  const rect = svgEl.value.getBoundingClientRect();
  const relX = (clientX - rect.left) / rect.width;
  const relY = (clientY - rect.top) / rect.height;
  const svgX = relX * 600;
  const svgY = relY * 300;
  const x = svgX / 300 - 1; // [0,600] -> [-1,1]
  const y = 1 - svgY / 150; // [0,300] -> [1,-1]
  return { x, y };
}

function normToSvgX(x: number) { return (x + 1) * 300; }
function normToSvgY(y: number) { return (1 - y) * 150; }

function onSvgClick(evt: MouseEvent) {
  if (mode.value !== 'perceptron') return;
  const { x, y } = svgToNorm(evt.clientX, evt.clientY);
  points.value.push({ x, y, label: currentLabel.value });
  updateAccuracy();
}

function predict(x: number, y: number): 1 | -1 {
  const s = w1.value * x + w2.value * y + b.value;
  return s >= 0 ? 1 : -1;
}

function trainStep() {
  if (points.value.length === 0) return;
  // single epoch SGD
  let updated = false;
  for (const p of points.value) {
    const yhat = predict(p.x, p.y);
    if (yhat !== p.label) {
      w1.value += lr * p.label * p.x;
      w2.value += lr * p.label * p.y;
      b.value += lr * p.label;
      updated = true;
    }
  }
  if (!updated) {
    stopAutoTrain();
  }
  updateAccuracy();
}

function updateAccuracy() {
  if (points.value.length === 0) { accuracy.value = 0; return; }
  let correct = 0;
  for (const p of points.value) {
    if (predict(p.x, p.y) === p.label) correct++;
  }
  accuracy.value = (correct / points.value.length) * 100;
}

function startAutoTrain() {
  if (autoTraining.value) return;
  autoTraining.value = true;
  autoHandle = window.setInterval(() => trainStep(), 200);
}

function stopAutoTrain() {
  autoTraining.value = false;
  if (autoHandle) {
    clearInterval(autoHandle);
    autoHandle = null;
  }
}

function resetPerceptron() {
  points.value = [];
  w1.value = (Math.random() - 0.5) * 2;
  w2.value = (Math.random() - 0.5) * 2;
  b.value = (Math.random() - 0.5) * 2;
  accuracy.value = 0;
}

const hasBoundary = computed(() => Math.abs(w2.value) > 1e-3);
const boundarySvg = computed(() => {
  // boundary y = -(w1/w2) x - b/w2
  const slope = -w1.value / (w2.value || 1e-6);
  const intercept = -b.value / (w2.value || 1e-6);
  const x1n = -1, x2n = 1;
  const y1n = slope * x1n + intercept;
  const y2n = slope * x2n + intercept;
  return { x1: normToSvgX(x1n), y1: normToSvgY(y1n), x2: normToSvgX(x2n), y2: normToSvgY(y2n) };
});

function switchMode(next: 'visualize' | 'perceptron' | 'game') {
  if (next === mode.value) return;
  mode.value = next;
  if (next === 'visualize') {
    stopAutoTrain();
    startSimulation();
    stopGameLoop();
  } else if (next === 'perceptron') {
    stopSimulation();
    stopGameLoop();
  } else if (next === 'game') {
    stopSimulation();
    stopAutoTrain();
    resetWeights();
    startGameLoop();
  }
}

defineExpose({ startSimulation, stopSimulation, isRunning });

initializeLayout();
</script>

<style scoped>
.select-none { user-select: none; }
</style>

